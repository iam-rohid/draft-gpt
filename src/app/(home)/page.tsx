import PopularTools from "./PopularTools";
import ToolCard from "./ToolCard";

const HomePage = () => {
  return (
    <main>
      <section className="bg-white py-16">
        <div className="px-4 container mx-auto max-w-screen-xl">
          <h1 className="text-center text-4xl md:text-5xl font-black max-w-screen-md mx-auto mb-4">
            Your Content Creation Secret Weapon
          </h1>
          <p className="text-center max-w-screen-md mx-auto mb-16 text-slate-600 md:text-lg">
            Boost Your Writing Productivity with DraftGPT&apos;s Cutting-Edge AI
            Features
          </p>
          <form className="mb-16">
            <div className="relative max-w-screen-sm mx-auto">
              <input
                type="text"
                name="search"
                id="search"
                className="pr-4 md:pr-6 pl-12 md:pl-16 h-12 md:h-14 bg-slate-100 rounded-full w-full md:text-lg font-medium placeholder-slate-400"
                placeholder="Search..."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-slate-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </form>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
            <ToolCard />
            <ToolCard />
            <ToolCard />
            <ToolCard />
          </div>
        </div>
      </section>

      <PopularTools />
    </main>
  );
};

export default HomePage;
