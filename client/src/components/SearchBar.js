
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex flex-col gap-2">
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your search query (e.g., 'Show me candidates with 2+ years at Big Tech and experience with video chat')"
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm min-h-[100px]"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 self-end"
        >
          Search
        </button>
      </div>
    </form>
  );
}