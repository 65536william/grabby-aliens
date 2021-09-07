import Card from "../components/card";
import Layout from "../components/layout";
import SEO from "../components/seo";

const cards = [
  {
    text: "How Far To Grabby Aliens? Part 1.",
    link: "https://www.overcomingbias.com/2020/12/how-far-aggressive-aliens.html",
    date: "December 21st, 2020",
    tags: ["core"],
  },
  {
    text: "How Far To Grabby Aliens? Part 2.",
    link: "https://www.overcomingbias.com/2020/12/how-far-aggressive-aliens-part-2.html",
    date: "December 21st, 2020",
    tags: ["core"],
  },
  {
    text: "Try-Menu-Combo Filter Steps",
    link: "https://www.overcomingbias.com/2021/01/try-menu-combo-filter-steps.html",
    date: "January 3rd, 2021",
    tags: ["core"],
  },
  {
    text: "Why We Can’t See Grabby Aliens",
    link: "https://www.overcomingbias.com/2021/01/why-we-cant-see-grabby-aliens.html",
    date: "January 8th, 2021",
    tags: ["core"],
  },
  {
    text: "An Adventure",
    link: "https://www.overcomingbias.com/2021/02/an-adventure.html",
    date: "February 2nd, 2021",
    tags: ["core"],
  },
  {
    text: "Humans Are Early",
    link: "https://www.overcomingbias.com/2021/02/humans-are-early.html",
    date: "February 3rd, 2021",
    tags: ["core"],
  },
  {
    text: "Hail S. Jay Olson",
    link: "https://www.overcomingbias.com/2021/02/hail-s-jay-olson.html",
    date: "February 21st, 2021",
    tags: ["core"],
  },
  {
    text: "SETI Optimism is Human Future Pessimism",
    link: "https://www.overcomingbias.com/2021/03/seti-optimism-is-human-future-pessimism.html",
    date: "March 7th, 2021",
    tags: ["core"],
  },
  {
    text: "Power Laws Approximate Appearance",
    link: "https://www.overcomingbias.com/2021/03/power-laws-approximate-appearance.html",
    date: "March 26th, 2021",
    tags: ["core"],
  },
  {
    text: "Are Expansive Aliens Obvious?",
    link: "https://www.overcomingbias.com/2021/03/are-expansive-aliens-obvious.html",
    date: "March 27th, 2021",
    tags: ["core"],
  },
  {
    text: "Given Our Date, Is Sun Birth Late?",
    link: "https://www.overcomingbias.com/2021/03/given-our-date-is-sun-birth-late.html",
    date: "March 27th, 2021",
    tags: ["core"],
  },
  {
    text: "Try-Try or Try-Once Great Filter?",
    link: "https://www.overcomingbias.com/2020/12/try-try-or-try-once-great-filter.html",
    date: "December 3rd, 2020",
    tags: ["speculative"],
  },
  {
    text: "Searching For Eden",
    link: "https://www.overcomingbias.com/2020/12/searching-for-eden.html",
    date: "December 5th, 2020",
    tags: ["speculative"],
  },
  {
    text: "If Aliens Are Near",
    link: "https://www.overcomingbias.com/2020/12/if-aliens-are-near.html",
    date: "December 8th, 2020",
    tags: ["speculative"],
  },
  {
    text: "The Long Term Future of History",
    link: "https://www.overcomingbias.com/2020/12/the-long-term-future-of-history.html",
    date: "December 23rd, 2020",
    tags: ["speculative"],
  },
  {
    text: "What Is At Stake?",
    link: "https://www.overcomingbias.com/2021/02/what-is-at-stake.html",
    date: "February 19th, 2021",
    tags: ["speculative"],
  },
  {
    text: "Non-Grabby Legacies",
    link: "https://www.overcomingbias.com/2021/03/non-grabby-legacies.html",
    date: "March 8th, 2021",
    tags: ["speculative"],
  },
  {
    text: "Do Foo Fighters Show Our Snafu Fubar Future?",
    link: "https://www.overcomingbias.com/2021/03/do-foo-fighters-show-our-snafu-fubar-future.html",
    date: "March 12th, 2021",
    tags: ["speculative"],
  },
  {
    text: "UFO Stylized Social Facts",
    link: "https://www.overcomingbias.com/2021/03/social-ufo-stylized-facts.html",
    date: "March 28th, 2021",
    tags: ["speculative"],
  },
  {
    text: "Explaining Stylized UFO Facts",
    link: "https://www.overcomingbias.com/2021/03/explaining-stylized-ufo-facts.html",
    date: "March 30th, 2021",
    tags: ["speculative"],
  },
  {
    text: "To Beat Aliens, We Must Become Aliens",
    link: "https://www.overcomingbias.com/2021/04/to-beat-aliens-we-must-become-aliens.html",
    date: "April 5th, 2021",
    tags: ["speculative"],
  },
  {
    text: "UFOs Show Govt. Competence As Either Surprisingly High Or Low",
    link: "https://www.overcomingbias.com/2021/05/ufos-say-govt-competence-is-either-surprisingly-high-or-surprisingly-low.html",
    date: "May 5th, 2021",
    tags: ["speculative"],
  },
  {
    text: "When The Tabooed Taboo",
    link: "https://www.overcomingbias.com/2021/05/when-the-tabooed-taboo.html",
    date: "May 15th, 2021",
    tags: ["speculative"],
  },
  {
    text: "Panspermia Siblings",
    link: "https://www.overcomingbias.com/2021/05/panspermia-siblings.html",
    date: "May 20th, 2021",
    tags: ["speculative"],
  },
  {
    text: "UFOs and Status",
    link: "https://www.overcomingbias.com/2021/06/ufos-and-status.html",
    date: "June 4th, 2021",
    tags: ["speculative"],
  },
  {
    text: "On UFOs-As-Aliens Priors",
    link: "https://www.overcomingbias.com/2021/06/on-ufo-as-aliens-priors.html",
    date: "June 8th, 2021",
    tags: ["speculative"],
  },
];

const PostsPage = () => (
  <Layout>
    <SEO
      title="Robin Hanson's blog posts – Grabby Aliens"
      metaDescription="Core and speculative blog posts on aliens (and grabby aliens), from overcomingbias.com."
      imagePath="posts-image"
    />
    <div>
      <div className="lg:space-y-10 sm:space-y-5 space-y-3 font-serif">
        <h3 className="font-sans font-bold lg:text-2xl sm:text-xl text-lg">
          Hanson&apos;s blog posts
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

export default PostsPage;
