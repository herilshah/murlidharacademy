import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";

const PhotographyPortfolio = () => {
  const portfolioImages = [
    { src: p1, alt: "Portfolio image 1" },
    { src: p2, alt: "Portfolio image 2" },
  ];

  return (
    <section id="portfolio" className="py-24 px-4 relative bg-black">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-white font-display text-sm tracking-[0.3em] uppercase mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Our Work
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A glimpse into our photography journey, capturing moments that matter
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotographyPortfolio;



