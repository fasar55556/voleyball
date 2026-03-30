const CtaSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, hsl(38 92% 55%) 0, hsl(38 92% 55%) 1px, transparent 0, transparent 50%)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
        <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-3">
          Твоя очередь
        </p>
        <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold uppercase text-foreground mb-6 leading-[0.95]">
          Каждый великий<br />
          начинал <span className="text-gradient">с нуля</span>
        </h2>
        <p className="font-body text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Карч играл на&nbsp;пляже с&nbsp;отцом. Жиба бегал по&nbsp;улицам фавел. 
          Тетюхин начинал во&nbsp;дворе. Всё, что тебе нужно — мяч, сетка 
          и&nbsp;решимость. Остальное приложится.
        </p>
        <div className="section-divider w-24 mx-auto mb-10" />
        <blockquote className="font-body italic text-secondary-foreground text-xl mb-10">
          «Волейбол — это не&nbsp;только спорт. Это&nbsp;школа жизни, 
          где ты&nbsp;учишься падать и&nbsp;подниматься»
        </blockquote>
        <a
          href="https://www.google.com/search?q=волейбол+секции+рядом"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-heading uppercase tracking-widest text-sm bg-primary text-primary-foreground px-10 py-4 hover:opacity-90 transition-opacity duration-300"
        >
          Найти секцию рядом
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
