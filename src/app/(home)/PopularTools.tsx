"use client";
import { useState } from "react";
import ToolCard from "./ToolCard";

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

const PopularTools = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  return (
    <section className="bg-slate-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-16">
          Most popular tools
        </h2>

        <div className="bg-white border border-slate-100 shadow-md rounded-full p-2 mb-16 w-fit mx-auto gap-2 flex overflow-x-auto max-w-full">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 h-12 rounded-full font-medium flex items-center whitespace-nowrap ${
                selectedTab == category.id
                  ? "bg-blue-500 text-white"
                  : "hover:bg-slate-100 text-slate-600 hover:text-slate-900"
              }`}
              onClick={() => {
                setSelectedTab(category.id);
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
          <ToolCard />
          <ToolCard />
          <ToolCard />
          <ToolCard />
        </div>
      </div>
    </section>
  );
};

export default PopularTools;
