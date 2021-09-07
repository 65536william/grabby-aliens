import Card from "../components/card";
import Layout from "../components/layout";
import SEO from "../components/seo";

const cards = [
  {
    text: "How Far Away Are Expansionist Aliens? – SciFuture",
    link: "https://www.youtube.com/watch?v=Rjm--7t8Llk&t=4650s",
    date: "December 28th, 2020",
    tags: ["interview"],
  },
  {
    text: "A Simple Model of Grabby Aliens – Foresight Institute",
    link: "https://www.youtube.com/watch?v=0lKliaFllPA",
    date: "February 9th, 2021",
    tags: ["presentation"],
  },
  {
    text: "Aliens and UFOs in the Social Sciences with Robin Hanson – Lunchtime Social Science",
    link: "https://www.buzzsprout.com/1017922/7875748",
    date: "February 16th, 2021",
    tags: ["interview"],
  },
  {
    text: "Nice Galactic Bulge, Sweetcheeks – Briar Patch Observatory",
    link: "https://briarpod.net/nice-galactic-bulge-sweetcheeks",
    date: "February 21st, 2021",
    tags: ["interview"],
  },
  {
    text: "A Simple Model of Grabby Aliens – Future of Humanity Institute",
    link: "https://www.youtube.com/watch?v=24dJ9JlqL2A",
    date: "March 5th, 2021",
    tags: ["presentation"],
  },
  {
    text: "God and Aliens with Robin Hanson – Bad Christian Podcast",
    link: "https://soundcloud.com/bcpod/god-and-aliens-with-robin",
    date: "March 24th, 2021",
    tags: ["interview"],
  },
  {
    text: "UFOs and Space Aliens – With Good Reason",
    link: "https://soundcloud.com/withgoodreason/ufos-and-space-aliens",
    date: "August 20th, 2021",
    tags: ["interview"],
  },
];

const PresentationsPage = () => (
  <Layout>
    <SEO
      title="Grabby Aliens – a simple model by Robin Hanson"
      description="Advanced aliens really are out there, and we have enough data to say roughly where they are in space and time, and when we will meet or see them."
    />
    <div>
      <div className="lg:space-y-10 sm:space-y-5 space-y-3 font-serif">
        <h3 className="font-sans font-bold lg:text-2xl sm:text-xl text-lg">
          Presentations and interviews
        </h3>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-16 sm:gap-10 gap-5">
          {cards.map((card) => (
            <Card
              text={card.text}
              link={card.link}
              date={card.date}
              tags={card.tags}
            />
          ))}
        </div>
      </div>
    </div>
  </Layout>
);

export default PresentationsPage;
