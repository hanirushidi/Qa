export default function WhyThisService({
  issues,
}: {
  issues: Array<{
    number: number;
    title: string;
    description: string;
  }>;
}) {
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {issues.map((issue, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-2xl p-6 flex flex-col gap-4"
          >
            <div className="flex issues-start gap-4">
              <span className="text-4xl font-bold text-[#3a67b4]">
                {issue.number}
              </span>
              <h2 className="text-xl font-semibold text-white mt-1">
                {issue.title}
              </h2>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {issue.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
