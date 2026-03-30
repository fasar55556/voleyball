import grassrootsImage from "@/assets/volleyball-grassroots.jpg";

const timelineEvents = [
  {
    year: "1895",
    title: "Рождение «Минтонетта»",
    description:
      "Уильям Морган, преподаватель физкультуры из&nbsp;Холиока (Массачусетс), изобрёл игру для бизнесменов среднего возраста, которым баскетбол казался слишком утомительным. Он&nbsp;повесил теннисную сетку на&nbsp;высоте 197&nbsp;см и&nbsp;предложил перебрасывать через неё камеру от&nbsp;баскетбольного мяча.",
  },
  {
    year: "1916",
    title: "Филиппинский прорыв",
    description:
      "На&nbsp;Филиппинах впервые применили атакующий удар — «бомбу». Именно здесь волейбол перестал быть вежливым перебрасыванием мяча и&nbsp;превратился в&nbsp;динамичную борьбу у&nbsp;сетки.",
  },
  {
    year: "1947",
    title: "Мировое объединение",
    description:
      "Основана Международная федерация волейбола (FIVB). Четырнадцать стран собрались в&nbsp;Париже, чтобы создать единые правила для игры, которая уже захватила все континенты.",
  },
  {
    year: "1964",
    title: "Олимпийское признание",
    description:
      "Волейбол включён в&nbsp;программу Олимпийских игр в&nbsp;Токио. Японская женская сборная — «Восточные ведьмы» — потрясла мир своей техникой приёма и&nbsp;стала золотой легендой.",
  },
  {
    year: "1996",
    title: "Пляжная революция",
    description:
      "Пляжный волейбол дебютировал на&nbsp;Олимпиаде в&nbsp;Атланте. Два игрока, песок, солнце — и&nbsp;миллиарды телезрителей. Спорт стал одним из&nbsp;самых зрелищных олимпийских событий.",
  },
];

const HistorySection = () => {
  return (
    <section id="history" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-3">
          Хроники
        </p>
        <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase text-foreground mb-16">
          130 лет<br />
          <span className="text-gradient">в полёте</span>
        </h2>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-start mb-16">
          <div className="relative">
            <img
              src={grassrootsImage}
              alt="Дворовый волейбол на закате"
              className="w-full aspect-square object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <p className="absolute bottom-4 left-4 font-heading text-primary text-sm uppercase tracking-widest">
              Там, где всё начинается
            </p>
          </div>

          <div className="space-y-0">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`border-l-2 border-secondary pl-8 py-6 relative ${
                  index === timelineEvents.length - 1 ? "" : ""
                }`}
              >
                <div className="absolute left-[-7px] top-8 w-3 h-3 bg-primary rounded-full" />
                <span className="font-heading text-primary text-3xl font-bold">
                  {event.year}
                </span>
                <h3 className="font-heading text-foreground text-xl uppercase mt-1 mb-2">
                  {event.title}
                </h3>
                <p
                  className="font-body text-muted-foreground leading-relaxed text-sm"
                  dangerouslySetInnerHTML={{ __html: event.description }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
