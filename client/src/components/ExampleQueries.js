
export default function ExampleQueries({ onSelectQuery }) {
  const examples = [
    "Show me candidates that have at least 2 years working at a Big Tech company and have experience with building video chat interfaces.",
    "Give me 5 candidates with over 5 years of experience in full-stack development and a background in fintech."
  ];

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-2">Example Queries:</h2>
      <div className="space-y-2">
        {examples.map((query, index) => (
          <button
            key={index}
            onClick={() => onSelectQuery(query)}
            className="block w-full text-left p-3 bg-white border border-gray-200 rounded-md hover:bg-gray-50 text-sm"
          >
            {query}
          </button>
        ))}
      </div>
    </div>
  );
}