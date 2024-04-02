import React from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h1 className="text-xl font-semibold text-gray-700">Dashboard</h1>
        </div>
        <nav className="flex flex-col p-6 space-y-4">
          <Link to="/" className="text-gray-600 hover:text-gray-800 transition-colors">Home</Link>
          <Link to="/designs" className="text-gray-600 hover:text-gray-800 transition-colors">Designs</Link>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Profile Section */}
          <div className="bg-white p-6 shadow-sm rounded-lg">
            <h2 className="font-semibold text-xl mb-4">Profile</h2>
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Email:</strong> johndoe@example.com</p>
            <p><strong>Member Since:</strong> January 2022</p>
          </div>

          {/* Past Projects/Collaborations */}
          <div className="bg-white p-6 shadow-sm rounded-lg">
            <h2 className="font-semibold text-xl mb-4">Past Projects</h2>
            <ul>
              <li>Project 1 - Jan 2023</li>
              <li>Collaboration with XYZ - Feb 2023</li>
              {/* Add more projects here */}
            </ul>
          </div>
          
          {/* Favourites Section */}
          <div className="bg-white p-6 shadow-sm rounded-lg">
            <h2 className="font-semibold text-xl mb-4">Favourites</h2>
            <ul>
              <li>Design 1</li>
              <li>Design 2</li>
              {/* Add more favourites here */}
            </ul>
          </div>
          
          {/* Browsing History */}
          <div className="bg-white p-6 shadow-sm rounded-lg col-span-1 md:col-span-2 lg:col-span-3">
            <h2 className="font-semibold text-xl mb-4">Browsing History</h2>
            <p>Your browsing history will appear here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
