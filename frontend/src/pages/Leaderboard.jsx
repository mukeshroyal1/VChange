import React from "react";

const Leaderboard = () => {
  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <h2 className="text-center mb-4" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#343a40' }}>Leaderboard</h2>
      <p className="text-center mb-5 text-muted" style={{ fontSize: '1.25rem' }}>
        See how volunteers rank in the community.
      </p>
      <div className="text-center">
        <a href="#leaderboard-details" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '1rem', borderRadius: '4px' }}>
          View Details
        </a>
      </div>
    </div>
  );
};

export default Leaderboard;
