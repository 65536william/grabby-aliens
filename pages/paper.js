import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from "../components/card";

const PaperPage = () => (
  <Layout>
    <SEO
      title="Astrophysical Journal Paper – Grabby Aliens"
      metaDescription="If Loud Aliens Explain Human Earliness, Quiet Aliens Are Also Rare (version 3)"
      imagePath="paper-image"
    />
    <div className="max-w-prose">
      <div className="lg:space-y-10 sm:space-y-5 space-y-3 font-serif">
        <h3 className="font-sans font-bold lg:text-2xl sm:text-xl text-lg">
          Paper
        </h3>
        <p className="lg:text-xl sm:text-lg text-base">
          Here is our main paper on the subject, to appear in{" "}
          <i>Astrophysical Journal</i>:
        </p>
        <p className="lg:text-xl sm:text-lg text-base">
          <a href="https://arxiv.org/abs/2102.01522">
            “If Loud Aliens Explain Human Earliness, Quiet Aliens Are Also Rare”
            (version 3)
          </a>{" "}
          by{" "}
          <a
            href="http://hanson.gmu.edu/"
            className="text-indigo-700 underline"
          >
            Robin Hanson
          </a>
          ,{" "}
          <a
            href="https://twitter.com/DanGMartin1"
            className="text-indigo-700 underline"
          >
            Daniel Martin
          </a>
          ,{" "}
          <a
            href="http://calvinmccarter.com/"
            className="text-indigo-700 underline"
          >
            Calvin McCarter
          </a>
          , and{" "}
          <a
            href="https://twitter.com/PaulsonJonathan"
            className="text-indigo-700 underline"
          >
            Jonathan Paulson
          </a>
          , September 7th, 2021.
        </p>
        <blockquote>
          <p className="lg:text-xl sm:text-lg text-base lg:mx-10 sm:mx-5 mx-3">
            If life on Earth had to achieve <em>n</em> “hard steps” to reach
            humanity’s level, then the chance of this event rose as time to the{" "}
            <em>n</em>-th power. Integrating this over habitable star formation
            and planet lifetime distributions predicts &gt;99% of advanced life
            appears after today, unless <em>n</em> &lt; 3 <em>and</em> max
            planet duration &lt;50Gyr. That is, we seem early. We offer this
            explanation: a deadline is set by “loud” aliens who are born
            according to a hard steps power law, expand at a common rate, change
            their volumes’ appearances, and prevent advanced life like us from
            appearing in their volumes. “Quiet” aliens, in contrast, are much
            harder to see. We fit this three- parameter model of loud aliens to
            data: 1) <em>birth power</em> from the number of hard steps seen in
            Earth history, 2) <em>birth constant</em> by assuming a inform
            distribution over our rank among loud alien birth dates, and 3){" "}
            <em>expansion speed</em> from our not seeing alien volumes in our
            sky. We estimate that loud alien civilizations now control 40- 50%
            of universe volume, each will later control ∼10<sup>5</sup> - 3x10
            <sup>7</sup> galaxies, and we could meet them in ∼200Myr – 2Gyr. If
            loud aliens arise from quiet ones, a depressingly low transition
            chance (&lt; ∼10<sup>−4</sup>) is required to expect that even one
            other quiet alien civilization has ever been active in our galaxy.
            Which seems bad news for SETI. But perhaps alien volume appearances
            are subtle, and their expansion speed lower, in which case we
            predict many long circular arcs to find in our sky.
          </p>
        </blockquote>
        <Card
          text="Download the paper from arXiv →"
          link="https://arxiv.org/abs/2102.01522"
        />
        <p className="lg:text-xl sm:text-lg text-base">
          (See also prior version 2{" "}
          <a
            href="https://arxiv.org/pdf/2102.01522v2.pdf"
            className="text-indigo-700 underline"
          >
            “If Loud Aliens Explain Human Earliness, Quiet Aliens Are Also Rare”
          </a>
          , February 1, 2021.)
        </p>
        <p className="lg:text-xl sm:text-lg text-base">
          (See also prior version 1{" "}
          <a
            href="https://arxiv.org/pdf/2102.01522v1.pdf"
            className="text-indigo-700 underline"
          >
            “A Simple Model of Grabby Aliens”
          </a>
          , February 1, 2021.)
        </p>
      </div>
    </div>
  </Layout>
);

export default PaperPage;
