import Link from "next/link";

const ToolCard = () => {
  return (
    <Link
      href="#"
      className="bg-white shadow-md hover:shadow-xl rounded-xl border-slate-100 border"
    >
      <div className="p-4">
        <div className="h-12 w-12 flex items-center justify-center bg-slate-100 rounded-md mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </div>

        <h3 className="text-lg font-semibold mb-1">AI Email Writer</h3>
        <p className="text-slate-600 mb-2">
          Write emails with confidence using AI
        </p>
      </div>
    </Link>
  );
};

export default ToolCard;
