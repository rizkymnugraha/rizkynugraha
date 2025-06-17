export default function KeyContributions({
  isHovered,
  mousePosition,
  jobDescs,
}: {
  isHovered: boolean;
  mousePosition: { x: number; y: number };
  jobDescs: string[];
}) {
  return (
    <div
      className={`md:absolute mt-4 md:mt-0 z-50 pointer-events-none transition-opacity duration-200 ${
        isHovered ? "md:opacity-100" : "md:opacity-0"
      }`}
      style={{
        left: `${mousePosition.x + 15}px`,
        top: `${mousePosition.y + 15}px`,
        transform: "translate(0, 0)",
      }}
    >
      <div className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg shadow-2xl backdrop-blur-sm md:w-sm">
        <div className="flex items-center mb-2">
          <span className="text-sm text-blue-500 tracking-[0.2em]">
            Key Contributions:
          </span>
          <div className="flex-grow h-px ml-4 bg-gray-600"></div>
        </div>
        <ul className="space-y-2">
          {jobDescs.map((job, index) => (
            <li key={index} className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shrink-0 mt-1.5"></div>
              <span className="text-sm text-gray-200 font-medium">{job}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
