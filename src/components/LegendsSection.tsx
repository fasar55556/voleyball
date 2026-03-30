import diveImage from "@/assets/volleyball-dive.jpg";
import teamImage from "@/assets/volleyball-team.jpg";

const legends = [
  {
    name: "Карч Кирай",
    country: "США",
    fact: "Единственный в истории олимпийский чемпион и в классическом, и в пляжном волейболе",
    story:
      "Сын венгерского иммигранта, Карч начал играть в&nbsp;6&nbsp;лет на пляжах Санта-Барбары со&nbsp;своим отцом. Никаких элитных академий — просто песок, солнце и&nbsp;бесконечная любовь к&nbsp;мячу. Он&nbsp;стал трёхкратным олимпийским чемпионом и&nbsp;доказал: величие рождается не&nbsp;в&nbsp;привилегиях, а&nbsp;в&nbsp;упорстве.",
    image: diveImage,
  },
  {
    name: "Жиба (Жилберту Годой)",
    country: "Бразилия",
    fact: "Трёхкратный призёр Олимпийских игр, MVP чемпионата мира",
    story:
      "Вырос в&nbsp;бедном районе Лондрины. Его мать работала уборщицей, чтобы сын мог тренироваться. Жиба стал символом бразильского волейбола — артист на&nbsp;площадке, который превращал каждую подачу в&nbsp;спектакль. Из&nbsp;фавел — на&nbsp;вершину мира.",
    image: teamImage,
  },
  {
    name: "Сергей Тетюхин",
    country: "Россия",
    fact: "Четыре Олимпиады, золото Лондона-2012 в 37 лет",
    story:
      "Мальчик из&nbsp;Ферганы, начавший с&nbsp;дворового волейбола в&nbsp;советском Узбекистане. Пережил распад страны, травмы и&nbsp;смену поколений. В&nbsp;37&nbsp;лет, когда все списали его со&nbsp;счетов, он&nbsp;привёл сборную России к&nbsp;олимпийскому золоту в&nbsp;Лондоне. Легенда, которая никогда не&nbsp;сдавалась.",
    image: diveImage,
  },
  {
    name: "Лан Пинг",
    country: "Китай",
    fact: "Олимпийское золото как игрок и как тренер",
    story:
      "Дочь рабочих из&nbsp;Тяньцзиня, росшая в&nbsp;эпоху культурной революции. Стала звездой «Железного молота» — сборной Китая 1980-х. Затем, уже как тренер, в&nbsp;2016&nbsp;году привела новое поколение китаянок к&nbsp;олимпийскому золоту в&nbsp;Рио. Доказала: настоящий лидер — это тот, кто зажигает других.",
    image: teamImage,
  },
];

const LegendsSection = () => {
  return (
    <section id="legends" className="py-24 bg-card">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="font-heading text-primary uppercase tracking-[0.3em] text-sm mb-3">
          Из народа — на вершину
        </p>
        <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase text-foreground mb-16">
          Легенды,<br />
          <span className="text-gradient">которые вдохновляют</span>
        </h2>

        <div className="space-y-20">
          {legends.map((legend, index) => (
            <div
              key={legend.name}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="relative overflow-hidden">
                  <img
                    src={legend.image}
                    alt={`Волейбольная динамика — ${legend.name}`}
                    className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                    width={1024}
                    height={1024}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                    <span className="font-heading text-primary text-xs uppercase tracking-[0.2em]">
                      {legend.country}
                    </span>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <h3 className="font-heading text-3xl md:text-4xl font-bold uppercase text-foreground mb-2">
                  {legend.name}
                </h3>
                <p className="font-heading text-primary text-sm uppercase tracking-widest mb-4">
                  {legend.fact}
                </p>
                <p
                  className="font-body text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: legend.story }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegendsSection;
