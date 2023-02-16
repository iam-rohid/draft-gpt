import ToolCard from "@/app/(home)/ToolCard";
import { MdSearch } from "react-icons/md";

const TemplatesPage = () => {
  return (
    <>
      <header className="h-14 w-full border-b border-slate-100 flex items-center">
        <form className="w-full relative h-full flex-1">
          <input
            type="text"
            className="h-full pl-12 w-full pr-4 placeholder-slate-400 outline-none"
            placeholder="Search..."
          />
          <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-slate-400" />
        </form>
      </header>

      <section className="my-8">
        <div className="px-4 mx-auto container max-w-screen-xl">
          <div className="mb-4">
            <h2 className="font-bold text-2xl">Templates</h2>
          </div>
          <div>
            {categories.map((category) => (
              <button key={category.id}>{category.name}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <ToolCard />
            <ToolCard />
            <ToolCard />
            <ToolCard />
            <ToolCard />
            <ToolCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default TemplatesPage;

const categories = [
  {
    id: "all",
    name: "All Tools",
  },
  {
    id: "blog",
    name: "Blog",
  },
  {
    id: "social-media",
    name: "Social Media",
  },
  {
    id: "Email",
    name: "Email",
  },
  {
    id: "fun",
    name: "Fun",
  },
  {
    id: "website-copy",
    name: "Website Copy",
  },
  {
    id: "writing-tool",
    name: "Writing Tool",
  },
  {
    id: "video",
    name: "Video",
  },
];
