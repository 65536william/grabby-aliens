import Card from "../components/card";
import Layout from "../components/layout";
import SEO from "../components/seo";

const cards = [
  {
    text: "Grabby Aliens Press Release",
    link: "https://grabbyaliens.com/press-release",
    date: "September 9th, 2021",
  },
  {
    text: "George Mason University",
    link: "https://science.gmu.edu/media/bereablog91421pdf",
    date: "September 13th, 2021",
  },
  {
    text: "Future of Humanity Institute",
    link: "https://www.fhi.ox.ac.uk/loud-aliens/",
    date: "September 20th, 2021",
  },
  {
    text: "Durham University",
    link: "https://www.durham.ac.uk/news-events/latest-news/2021/10/scientists-model-suggests-alien-encounters-are-on-the-horizon/",
    date: "October 29st, 2021",
  },
];

const PressPage = () => (
  <Layout>
    <SEO
      title="Press releases – Grabby Aliens"
      metaDescription="Press releases sharing the Grabby Aliens paper and its ideas."
      imagePath="index-image"
    />
    <div>
      <div className="lg:space-y-10 sm:space-y-5 space-y-3 font-serif">
        <h3 className="font-sans font-bold lg:text-2xl sm:text-xl text-lg">
          Press releases
        </h3>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-16 sm:gap-10 gap-5">
          {cards.map((card) => (
            <Card
              key={card.text}
              text={card.text}
              link={card.link}
              date={card.date}
            />
          ))}
        </div>
      </div>
    </div>
  </Layout>
);

export default PressPage;
