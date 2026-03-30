import heroImage from "@/assets/hero-volleyball.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
      <img
        src={heroImage}
        alt="Волейболист в прыжке наносит удар"
        className="absolute inset-0 w-full h-full object-cover object-center"
        width={1920}
        height={1080}
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-4 animate-fade-in">
          Исторический дискурс
        </p>
        <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold uppercase leading-[0.9] mb-6">
          <span className="text-foreground">Волей</span>
          <span className="text-gradient">бол</span>
        </h1>
        <p className="font-body text-secondary-foreground text-lg md:text-xl max-w-xl leading-relaxed mb-8">
          От&nbsp;простой игры на&nbsp;заднем дворе до&nbsp;олимпийской арены. 
          История спорта, который меняет судьбы.
        </p>
        <div className="flex gap-4 items-center">
          <a
            href="#history"
            className="font-heading uppercase tracking-widest text-sm border border-primary text-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Узнать историю
          </a>
          <a
            href="#legends"
            className="font-heading uppercase tracking-widest text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Легенды →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
