import React from 'react';
import CandidateCard from './CandidateCard';

const CandidateList = ({ candidates, isLoading }) => {
  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        Searching for candidates...
      </div>
    );
  }

  if (!candidates.length) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        No candidates found. Try adjusting your search criteria.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {candidates.map((candidate, index) => (
        <CandidateCard key={index} candidate={candidate} />
      ))}
    </div>
  );
};

export default CandidateList;