import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "next/image";
import gaplot2 from "../public/gaplot2.png";
import Card from "../components/card";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Grabby Aliens – a simple model by Robin Hanson"
      metaDescription="Advanced aliens really are out there, and we have enough data to say roughly where they are in space and time, and when we will see or meet them."
      imagePath="index-image"
    />
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 sm:gap-10 gap-5">
      <div className="lg:space-y-16 sm:space-y-10 space-y-5">
        <div className="bg-indigo-100 lg:p-10 sm:p-5 p-3 shadow lg:rounded-2xl sm:rounded-xl rounded-lg">
          <h2 className="font-serif lg:text-2xl sm:text-xl text-lg">
            Advanced aliens really are out there, and we have enough data to say
            roughly where they are in space and time, and when we will see or
            meet them.
          </h2>
        </div>
        <div className="block lg:hidden lg:space-y-5 sm:space-y-3 space-y-1 font-serif">
          <h3 className="font-sans font-bold lg:text-2xl sm:text-xl text-lg">
            Paper
          </h3>
          <p className="lg:text-xl sm:text-lg text-base">
            “If Loud Aliens Explain Human Earliness, Quiet Aliens Are Also Rare”
            by Robin Hanson, Daniel Martin, Calvin McCarter, and Jonathan
            Paulson, September 7th, 2021.
          </p>
          <Card text="Read the Astrophysics Journal paper →" link="/paper" />
        </div>
        <div className="block lg:hidden">
          <Image
            src={gaplot2}
            alt="Plot of civilisations emerging in space, over time"
          />
        </div>
        <div className="lg:space-y-10 sm:space-y-5 space-y-3 font-serif">
          <h3 className="font-sans font-bold lg:text-2xl sm:text-xl text-lg">
            Overview
          </h3>
          <p className="lg:text-xl sm:text-lg text-base">
            There are two kinds of alien civilizations. “Quiet” aliens don’t
            expand or change much, and then they die. We have little data on
            them, and so must mostly speculate, via methods like the Drake
            equation.
          </p>
          <p className="lg:text-xl sm:text-lg text-base">
            “Loud” aliens, in contrast, visibly change the volumes they control,
            and just keep expanding fast until they meet each other. As they
            should be easy to see, we can fit theories about loud aliens to our
            data, and say much about them, as S. Jay Olsen has done in 7 related
            papers (
            <a
              href="https://arxiv.org/abs/1411.4359"
              className="text-indigo-700 underline"
            >
              1
            </a>
            ,{" "}
            <a
              href="https://arxiv.org/abs/1507.05969"
              className="text-indigo-700 underline"
            >
              2
            </a>
            ,{" "}
            <a
              href="https://arxiv.org/abs/1512.01521"
              className="text-indigo-700 underline"
            >
              3
            </a>
            ,{" "}
            <a
              href="https://arxiv.org/abs/1608.07522"
              className="text-indigo-700 underline"
            >
              4
            </a>
            ,{" "}
            <a
              href="https://arxiv.org/abs/1704.04125"
              className="text-indigo-700 underline"
            >
              5
            </a>
            ,{" "}
            <a
              href="https://arxiv.org/abs/1805.06329"
              className="text-indigo-700 underline"
            >
              6
            </a>
            ,{" "}
            <a
              href="https://arxiv.org/abs/2002.08194"
              className="text-indigo-700 underline"
            >
              7
            </a>
            ) since 2015.
          </p>
          <p className="lg:text-xl sm:text-lg text-base">
            Furthermore, we should believe that loud aliens exist, as that’s our
            most robust explanation for why humans have appeared so early in the
            history of the universe. While the current date is 13.8{" "}
            <i>billion</i> years after the Big Bang, the average star will last
            over five <i>trillion</i> years. And the standard hard-steps model
            of the origin of advanced life says it is <i>far</i> more likely to
            appear at the end of the longest planet lifetimes. But if loud
            aliens will soon fill the universe, and prevent new advanced life
            from appearing, that early deadline explains human earliness.
          </p>
          <p className="lg:text-xl sm:text-lg text-base">
            “Grabby” aliens is our especially simple model of loud aliens, a
            model with only 3 free parameters, each of which we can estimate to
            within a factor of 4 from existing data. That standard hard steps
            model implies a power law{" "}
            <i>
              (t/k)<sup>n</sup>
            </i>{" "}
            appearance function, with two free parameters <i>k</i> and <i>n</i>,
            and the last parameter is the expansion speed <i>s</i>. We estimate:
          </p>
          <ul className="list-disc lg:space-y-5 sm:space-y-3 space-y-1">
            <li className="lg:text-xl sm:text-lg text-base lg:mx-10 sm:mx-5 mx-3">
              Expansion speed <i>s</i> from fact that we don’t see loud alien
              volumes in our sky,
            </li>
            <li className="lg:text-xl sm:text-lg text-base lg:mx-10 sm:mx-5 mx-3">
              Power <i>n</i> from the history of major events in the evolution
              of life on Earth,
            </li>
            <li className="lg:text-xl sm:text-lg text-base lg:mx-10 sm:mx-5 mx-3">
              Constant <i>k</i> by assuming our date is a random sample from
              their appearance dates.
            </li>
          </ul>
          <p className="lg:text-xl sm:text-lg text-base">
            Using these parameter estimates, we can estimate distributions over
            their origin times, distances, and when we will meet or see them.
            While we don’t know the ratio of quiet to loud alien civilizations
            out there, we need this to be ten thousand to expect even one alien
            civilization ever in our galaxy. Alas as we are now quiet, our
            chance to become grabby goes as the inverse of this ratio.
          </p>
        </div>
      </div>
      <div className="lg:space-y-16 sm:space-y-10 space-y-5">
        <div className="hidden lg:block lg:space-y-5 sm:space-y-3 space-y-1 font-serif">
          <h3 className="font-sans font-bold lg:text-2xl sm:text-xl text-lg">
            Paper
          </h3>
          <p className="lg:text-xl sm:text-lg text-base">
            “If Loud Aliens Explain Human Earliness, Quiet Aliens Are Also Rare”
            by Robin Hanson, Daniel Martin, Calvin McCarter, and Jonathan
            Paulson, September 7th, 2021.
          </p>
          <Card text="Read the Astrophysical Journal paper →" link="/paper" />
        </div>
        <div className="hidden lg:block">
          <Image
            src={gaplot2}
            alt="Plot of civilisations emerging in space, over time"
          />
        </div>
        <div className="lg:space-y-5 sm:space-y-3 space-y-1 font-serif">
          <h3 className="font-sans font-bold lg:text-2xl sm:text-xl text-lg">
            3D Sim Movie of Model
          </h3>
          <iframe
            width="100%"
            height="300px"
            src="https://www.youtube.com/embed/oLvzFJLLfCY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="lg:space-y-5 sm:space-y-3 space-y-1 font-serif">
          <h3 className="font-sans font-bold lg:text-2xl sm:text-xl text-lg">
            Open-source code
          </h3>
          <p className="lg:text-xl sm:text-lg text-base">
            <a
              href="http://github.com/jonathanpaulson/grabby_aliens"
              className="text-indigo-700 underline"
            >
              github.com/jonathanpaulson/grabby_aliens
            </a>
          </p>
        </div>
        <div className="lg:space-y-7 sm:space-y-5 space-y-3">
          <Card text="Watch presentations →" link="/presentations" />
          <Card text="See blog posts →" link="/posts" />
          <Card text="Browse coverage →" link="/coverage" />
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
