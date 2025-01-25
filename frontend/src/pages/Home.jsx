import React from "react";
import logo from "../../assets/logo.svg";  // Adjust the path based on your file structure

const Home = () => {
  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <div className="text-center mb-4">
        <img src={logo} alt="VChange Logo" style={{ width: '150px', height: 'auto' }} />
      </div>
      <h2 className="text-center mb-4" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#343a40' }}>Home</h2>
      <p className="text-center mb-5 text-muted" style={{ fontSize: '1.25rem' }}>
        Making volunteering engaging and impactful in Kingston!
      </p>
      <div className="text-center">
        <a href="#about" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '1rem', borderRadius: '4px' }}>
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Home;
