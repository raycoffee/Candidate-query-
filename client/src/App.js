import { useState } from 'react';
import SearchBar from './components/SearchBar';
import CandidateList from './components/CandidateList';
import ExampleQueries from './components/ExampleQueries';
import { searchCandidates } from './services/api';

function App() {
  const [candidates, setCandidates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setIsLoading(true);
    setError(null);
    try {
      const results = await searchCandidates(query);
      setCandidates(results);
    } catch (err) {
      setError('Search failed. Please try again.');
      console.error('Search error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Candidate Search
        </h1>
        <p className="text-gray-600 mb-8">
          Search for candidates using natural language queries
        </p>
        
        <ExampleQueries onSelectQuery={handleSearch} />
        <SearchBar onSearch={handleSearch} />
        
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-md mb-4">
            {error}
          </div>
        )}
        
        <CandidateList 
          candidates={candidates} 
          isLoading={isLoading} 
        />
      </div>
    </div>
  );
}

export default App;
