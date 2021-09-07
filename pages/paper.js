import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from "../components/card";

const PaperPage = () => (
  <Layout>
    <SEO
      title="Grabby Aliens – a simple model by Robin Hanson"
      description="Advanced aliens really are out there, and we have enough data to say roughly where they are in space and time, and when we will meet or see them."
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
          <a href="https://arxiv.org/pdf/2102.01522.pdf">
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
          , March 25th, 2021.
        </p>
        <blockquote>
          <p className="lg:text-xl sm:text-lg text-base lg:mx-10 sm:mx-5 mx-3">
            The hard-steps model of advanced life timing suggests humans have
            arrived early. Our explanation: “grabby” civilizations (GC), who
            expand fast and long, and change their volumes’ appearances, set an
            early deadline. If we might soon become grabby, today is near a
            sample GC birthdate. Fast GC expansion explains why we do not see
            them. Each of our three model parameters is estimable from data,
            allowing detailed GC predictions. If GCs arise from non-grabby
            civilizations (NGCs), a depressingly low transition chance (~10
            <sup>-4</sup>) seems required to expect even one other NGC ever
            active in our galaxy.
          </p>
        </blockquote>
        <Card
          text="Download the paper from arXiv →"
          link="https://arxiv.org/pdf/2102.01522.pdf"
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
