import { useState } from "react";
import amoebaWall from "@/assets/amoeba-wall.jpg";
import amoebaWall2 from "@/assets/amoeba-wall-2.jpg";
import amoebaWall3 from "@/assets/amoeba-wall-3.jpg";
import studioVideo from "@/assets/amoeba-video.mp4";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const AmoebaSection = () => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<"image" | "video" | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedMedia(src);
    setMediaType("image");
  };

  const handleVideoClick = () => {
    setSelectedMedia(studioVideo);
    setMediaType("video");
  };

  return (
    <section id="amoeba" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Wall of Amoeba
          </h2>
        </div>

        {/* Media layout: All in one row - 3 photos + 1 video (video last) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Three photos */}
          <div
            className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-square"
            onClick={() => handleImageClick(amoebaWall)}
          >
            <img
              src={amoebaWall}
              alt="Amoeba wall design"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
          </div>

          <div
            className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-square"
            onClick={() => handleImageClick(amoebaWall2)}
          >
            <img
              src={amoebaWall2}
              alt="Amoeba wall design 2"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
          </div>

          <div
            className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-square"
            onClick={() => handleImageClick(amoebaWall3)}
          >
            <img
              src={amoebaWall3}
              alt="Amoeba wall design 3"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
          </div>

          {/* Portrait video - last */}
          <div
            className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-[9/16]"
            onClick={handleVideoClick}
          >
            <video
              src={studioVideo}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              muted
              playsInline
              autoPlay
              loop
            />
          </div>
        </div>
      </div>

      {/* Media enlargement dialog */}
      <Dialog 
        open={selectedMedia !== null} 
        onOpenChange={(open) => {
          if (!open) {
            setSelectedMedia(null);
            setMediaType(null);
          }
        }}
      >
        <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-none">
          {selectedMedia && (
            <div className="relative">
              {mediaType === "video" ? (
                <video
                  src={selectedMedia}
                  controls
                  autoPlay
                  className="w-full h-auto max-h-[90vh] rounded-lg"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={selectedMedia}
                  alt="Amoeba wall"
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

export default AmoebaSection;

