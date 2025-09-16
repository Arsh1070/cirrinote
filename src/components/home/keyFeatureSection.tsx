import AnimatedCard from "../ui/card";

const KeyFeatureSection = () => {
  return (
    <section id="features" className="h-auto w-full bg-black">
      <div className="px-6 py-40 sm:px-10">
        <div className="space-y-4">
          <button className="rounded-full bg-[#00bb77] p-2 text-sm">
            Whats the best
          </button>

          <h1 className="font-mono-500 text-5xl text-white md:text-6xl">
            Key Features
          </h1>
          <div className="font-mono-500 hidden text-xl text-white/50 sm:block">
            We’re proud to announce with the features{" "}
            <div>that empower creatives every day.</div>
          </div>
          <p className="font-mono-500 text-xl text-white/50 sm:hidden">
            We’re proud to announce with the features that empower creatives
            every day.
          </p>
        </div>

        <div className="my-10 flex gap-3 overflow-x-auto [scrollbar-width:none] md:hidden">
          <AnimatedCard />
          <AnimatedCard />
          <AnimatedCard />
          <AnimatedCard />
          <AnimatedCard />
          <AnimatedCard />
        </div>
        <div className="text-2xl text-white/50 md:hidden">
          Creative people worldwide rely on this app to craft ideas into
          <span className="text-[#00bb77]"> digital magic</span>.
        </div>
        <div className="my-20 hidden gap-3 md:grid md:grid-cols-3">
          <AnimatedCard />
          <div />
          <AnimatedCard />
          <div />
          <AnimatedCard />
          <div />
          <div className="col-span-2 py-[10%] text-5xl text-white/50">
            Creative people worldwide rely on this app to craft ideas into
            <span className="text-[#00bb77]"> digital magic</span>.
          </div>

          <AnimatedCard />
          <AnimatedCard />
          <div />
        </div>
      </div>
    </section>
  );
};

export default KeyFeatureSection;
