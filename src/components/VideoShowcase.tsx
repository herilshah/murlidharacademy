import { useState } from "react";
import studio1 from "@/assets/studio-1.jpg";
import studio2 from "@/assets/studio-2.jpg";
import studio3 from "@/assets/studio-3.jpg";
import studio4 from "@/assets/studio-4.jpg";
import studio5 from "@/assets/studio-5.jpg";
import studioVideo from "@/assets/studio-video.mp4";
import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

type MediaItem = {
  src: string;
  alt: string;
  type: "image" | "video";
};

const VideoShowcase = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  // All media from assets folder (images and video)
  const mediaItems: MediaItem[] = [
    { src: studio1, alt: "Studio view 1", type: "image" },
    { src: studio2, alt: "Studio view 2", type: "image" },
    { src: studio3, alt: "Studio view 3", type: "image" },
    { src: studio4, alt: "Studio view 4", type: "image" },
    { src: studio5, alt: "Studio view 5", type: "image" },
    { src: studioVideo, alt: "Studio video showcase", type: "video" },
  ];

  return (
    <section id="showcase" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-foreground font-display text-sm tracking-[0.3em] uppercase mb-4">
            Visual Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Studio Showcase
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the vibe of our studio through stunning visuals
          </p>
        </div>

        {/* Media gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-square"
              onClick={() => setSelectedMedia(item)}
            >
              {item.type === "video" ? (
                <>
                  <video
                    src={item.src}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-background/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Media enlargement dialog */}
      <Dialog open={selectedMedia !== null} onOpenChange={(open) => !open && setSelectedMedia(null)}>
        <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-none">
          {selectedMedia && (
            <div className="relative">
              {selectedMedia.type === "video" ? (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="w-full h-auto max-h-[90vh] rounded-lg"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                />
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VideoShowcase;
