const PhotographyAbout = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-black">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-white font-display text-sm tracking-[0.3em] uppercase mb-4">
            About Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Our Story
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-lg text-white/80 leading-relaxed text-center">
            Purvi Photography is dedicated to capturing life's most precious moments with precision, emotion, and artistry. 
            We believe that every photograph tells a story, and we are committed to creating timeless frames that speak volumes.
          </p>
          <p className="text-lg text-white/80 leading-relaxed text-center">
            From intimate weddings to joyful maternity shoots, from adorable baby portraits to high-fashion editorials, 
            we approach each project with care, attention to detail, and a passion for preserving memories that will last a lifetime.
          </p>
          <p className="text-lg text-white/80 leading-relaxed text-center italic">
            Love begins with a single moment, captured forever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotographyAbout;



