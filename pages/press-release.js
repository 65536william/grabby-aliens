import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from "../components/card";

const PressReleasePage = () => (
  <Layout>
    <SEO
      title="Grabby Aliens Explain Human Earliness, But Are Bad News for SETI"
      metaDescription="Aliens are real - we actually have enough data to say that aliens
            really are out there, and to roughly estimate where (some kinds)
            are, what they are doing, and when we will see or meet them."
      imagePath="index-image"
    />
    <div className="max-w-prose">
      <div className="lg:space-y-10 sm:space-y-5 space-y-3 font-serif">
        <h3 className="font-sans font-bold lg:text-2xl sm:text-xl text-lg">
          Press Release, Sept. 9, 2021.
        </h3>
        <h3 className="font-sans font-bold lg:text-xl sm:text-lg text-base">
          Grabby Aliens Explain Human Earliness, But Are Bad News for SETI
        </h3>
        <p className="lg:text-xl sm:text-lg text-base">
          <i>
            Aliens are real - we actually have enough data to say that aliens
            really are out there, and to roughly estimate where (some kinds)
            are, what they are doing, and when we will see or meet them.
          </i>
        </p>
        <p className="lg:text-xl sm:text-lg text-base">
          Evolution is so slow that human-level intelligence will probably never
          evolve on most habitable planets. If so, advanced life should be more
          likely to appear on longer-lived planets, and toward the end of their
          habitable periods. Yet in a universe where most planets last for
          trillions of years, we humans have appeared in less than 1% of that
          time. Why are we so surprisingly early?
        </p>
        <p className="lg:text-xl sm:text-lg text-base">
          Some have tried to explain this by suggesting that long-lived planets
          are not long habitable. However, a new paper instead explains human
          earliness via a selection effect. “Grabby” aliens have long been out
          there, expanding fast and changing the appearance of their volumes.
          Within a few billion years they will “grab” all of the universe, and
          then suppress competitors. This sets a deadline; we could not have
          appeared much later than we did. Which is why we are early.
        </p>
        <p className="lg:text-xl sm:text-lg text-base">
          This new math sim paper is an example of “gig science”, having been
          written by an unfunded team of non-astronomers, four strangers who
          united in response to a tweet request last December. It has recently
          been peer-reviewed and accepted for publication in the prestigious{" "}
          <i>Astrophysical Journal</i>.
        </p>
        <p className="lg:text-xl sm:text-lg text-base">
          Not only does human earliness suggest that these grabby aliens are
          actually out there, these authors fit a simple three-parameter model
          of the spacetime distribution of grabby aliens to three key datums, to
          tell us roughly where they are, what they are doing, and when we could
          meet or see them. These three key datums are: (1) our current date,
          (2) the fact that we don’t now see grabby aliens in our sky, and (3)
          the timing of key events in Earth’s evolutionary history. This model
          fit says that grabby aliens appear roughly once per million galaxies,
          that they expand at over half the speed of light, and that we could
          meet them in roughly a billion years.
        </p>
        <p className="lg:text-xl sm:text-lg text-base">
          We humans are now quiet, not grabby. The fewer other quiet
          civilizations are out there, relative to grabby ones, then the higher
          must be our future chances to get grabby, but the harder it will be to
          find aliens near us. For example, this quiet-to-grabby ratio needs to
          be over ten thousand to expect that even one quiet civilization has
          ever been active in our galaxy, and over ten million to expect that
          million-year-lifetime quiet aliens are active now in our galaxy.
          Overall, this looks bad for the search for extraterrestrial
          intelligence (SETI).
        </p>
        <blockquote>
          <p className="lg:text-xl sm:text-lg text-base lg:mx-10 sm:mx-5 mx-3">
            “If Loud Aliens Explain Human Earliness, Quiet Aliens Are Also Rare”
            Robin Hanson (rhanson@gmu.edu), Daniel Martin, Calvin McCarter,
            Jonathan Paulson
          </p>
          <p>
            <a
              href="https://iopscience.iop.org/article/10.3847/1538-4357/ac2369"
              className="text-indigo-700 underline lg:text-xl sm:text-lg text-base lg:mx-10 sm:mx-5 mx-3"
            >
              https://iopscience.iop.org/article/10.3847/1538-4357/ac2369
            </a>
          </p>
          <p>
            <a
              href="http://grabbyaliens.com"
              className="text-indigo-700 underline lg:text-xl sm:text-lg text-base lg:mx-10 sm:mx-5 mx-3"
            >
              http://grabbyaliens.com
            </a>
          </p>
        </blockquote>
        <Card text="Read the paper →" link="/paper" />
      </div>
    </div>
  </Layout>
);

export default PressReleasePage;
