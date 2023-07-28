import { Navigation } from "./Navigation";

export const HeroTitle = () => {
  return (
    <div className="hero">
      <Navigation />
      <section className="mx-auto container hero-title-box">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
          Spider-Quotes
        </h1>
        <p className="mb-3 text-lg text-gray-500 md:text-xl dark:text-white text-center">
          Free api to obtain quotes from Spiderman in comics, movies or tv
          series, in english or spanish.
        </p>
      </section>
    </div>
  );
};
