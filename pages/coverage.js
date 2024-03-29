import Card from "../components/card";
import Layout from "../components/layout";
import SEO from "../components/seo";

const cards = [
  {
    text: "Shtetl-Optimized",
    link: "https://www.scottaaronson.com/blog/?p=5253",
    date: "January 30th, 2021",
    tags: ["blog"],
  },
  {
    text: "Reddit",
    link: "https://www.reddit.com/r/slatestarcodex/comments/l8l4np/once_we_can_see_them_its_too_late/",
    date: "January 30th, 2021",
    tags: ["forum"],
  },
  {
    text: "Hacker News",
    link: "https://news.ycombinator.com/item?id=25972111",
    date: "January 31st, 2021",
    tags: ["forum"],
  },
  {
    text: "Marginal Revolution",
    link: "https://marginalrevolution.com/marginalrevolution/2021/02/a-simple-model-of-grabby-aliens.html",
    date: "February 2nd, 2021",
    tags: ["forum"],
  },
  {
    text: "Mind The Post",
    link: "https://pacojariego.me/2021/02/07/grabby-aliens/",
    date: "February 7th, 2021",
    tags: ["blog"],
  },
  {
    text: "ea.greaterwrong.com",
    link: "https://ea.greaterwrong.com/posts/HaLX5iB87QxAXMJ3w/optimistic-resolution-of-the-fermi-paradox-eternity-in-six",
    date: "February 11th, 2021",
    tags: ["blog"],
  },
  {
    text: "Metaculus",
    link: "https://www.metaculus.com/questions/6633/when-will-we-meet-grabby-aliens/",
    date: "February 20th, 2021",
    tags: ["forum"],
  },
  {
    text: "Less Wrong",
    link: "https://www.lesswrong.com/posts/5ANezmGRKnua8qzZR/grabby-aliens-and-zoo-hypothesis",
    date: "March 4th, 2021",
    tags: ["blog"],
  },
  {
    text: "Finding The Portal",
    link: "https://www.samuelgottfrid.se/the-fermi-paradox-grabby-aliens-and-reasoning/",
    date: "2021",
    tags: ["blog"],
  },
  {
    text: "Predict",
    link: "https://medium.com/predict/the-fate-of-life-in-the-universe-47a36ed81c74",
    date: "June 9th, 2021",
    tags: ["blog"],
  },
  {
    text: "Bloomberg Opinion",
    link: "https://www.bloomberg.com/opinion/articles/2021-06-11/the-ufo-report-won-t-change-minds-but-maybe-it-should",
    date: "June 11th, 2021",
    tags: ["article"],
  },
  {
    text: "Heise Online (Germany)",
    link: "https://www.heise.de/news/Analyse-Menschheit-wird-Ausserirdische-fruehestens-in-200-Millionen-Jahren-finden-6197268.html",
    date: "September 21st, 2021",
    tags: ["article"],
  },
  {
    text: "Metaphorosis",
    link: "https://magazine.metaphorosis.com/story/2021/the-great-contradiction-jordan-chase-young/",
    date: "November 26th, 2021",
    tags: ["fiction"],
  },
  {
    text: "Harsimony",
    link: "https://harsimony.wordpress.com/2021/12/05/implications-of-the-grabby-aliens-model/",
    date: "December 5th, 2021",
    tags: ["blog"],
  },
  {
    text: "Centauri Dreams",
    link: "https://www.centauri-dreams.org/2022/05/20/if-loud-aliens-explain-human-earliness-quiet-aliens-are-also-rare-a-review/",
    date: "May 20th, 2022",
    tags: ["blog"],
  },
  {
    text: "Rational Animations, video 1",
    link: "https://www.youtube.com/watch?v=l3whaviTqqg/",
    date: "September 22nd, 2021",
    tags: ["video"],
  },
  {
    text: "Rational Animations, video 2",
    link: "https://www.youtube.com/watch?v=LceY7nhi6j4/",
    date: "November 9th, 2021",
    tags: ["video"],
  },
  {
    text: "PBS Space Time",
    link: "https://www.youtube.com/watch?v=uTrFAY3LUNw/",
    date: "November 9th, 2022",
    tags: ["video"],
  },
  {
    text: "Kurzgesagt - In a Nutshell",
    link: "https://www.youtube.com/watch?v=GDSf2h9_39I/",
    date: "April 11th, 2023",
    tags: ["video"],
  },
];

const CoveragePage = () => (
  <Layout>
    <SEO
      title="Coverage – Grabby Aliens"
      metaDescription="Discussion and press coverage of the grabby aliens model by Robin Hanson et al."
      imagePath="coverage-image"
    />
    <div>
      <div className="lg:space-y-10 sm:space-y-5 space-y-3 font-serif">
        <h3 className="font-sans font-bold lg:text-2xl sm:text-xl text-lg">
          Coverage and discussion
        </h3>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-16 sm:gap-10 gap-5">
          {cards.map((card) => (
            <Card
              key={card.text}
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

export default CoveragePage;
