import React from 'react';

const CandidateCard = ({ candidate }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-bold">{candidate.name}</h3>
      <p className="text-gray-600">{candidate.headline}</p>
      <p className="text-gray-600">{candidate.experience} years experience</p>
      {candidate.snippet && (
        <p className="text-gray-600">{candidate.snippet}</p>
      )}

      <div className="mt-4">
        <h4 className="text-lg font-bold">Experience</h4>
        {candidate.skills && candidate.skills.length > 0 ? (
          <ul>
            {candidate.skills.map((skill, index) => (
              <li key={index} className="text-gray-600">
                {skill}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No skills details available.</p>
        )}
      </div>
    </div>
  );
};

export default CandidateCard;