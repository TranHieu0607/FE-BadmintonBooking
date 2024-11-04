import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    const handleLogin = () => {
      navigate('/login');
    };

    const handleHome = () => {
      navigate('/');
    };

    const handleAbout = () => {
      navigate('/about');
    };

    const handleLogout = async () => {
      await logout();
      navigate('/login');
    };

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    return (
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo và Brand */}
            <div className="flex items-center cursor-pointer" onClick={handleHome}>
              <span className="text-2xl font-bold text-blue-600">Court</span>
              <span className="text-2xl font-bold text-gray-800">site</span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600">Venues</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Sports</a>
              <button 
                onClick={handleAbout}
                className="text-gray-600 hover:text-blue-600 focus:outline-none"
              >
                About
              </button>
              <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center space-x-3 focus:outline-none"
                  >
                    {/* Avatar Circle */}
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                      {user.username?.charAt(0).toUpperCase() || 'U'}
                    </div>
                    {/* Username */}
                    <span className="text-gray-700 font-medium">
                      {user.username || user.name}
                    </span>
                    {/* Dropdown Arrow */}
                    <svg
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        isDropdownOpen ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                      {/* Profile Section */}
                      <div className="px-4 py-2 border-b">
                        <p className="text-sm text-gray-500">Signed in as</p>
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {user.email || user.username}
                        </p>
                      </div>

                      {/* Menu Items */}
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Your Profile
                      </Link>
                      
                      {/* Logout Button */}
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 focus:outline-none"
                      >
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button 
                  onClick={handleLogin}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign up
                </button>
              )}
            </div>
          </div>
        </div>
      </header>
    );
};

export default Header;