import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar } from "antd";
import { EditOutlined, ShareAltOutlined } from "@ant-design/icons";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [randomQuote, setRandomQuote] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");

  useEffect(() => {
    // Replace with your own endpoint or data source for quotes
    const quotes = [
      "Life is what happens when you're busy making other plans. - John Lennon",
      "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
      "Strive not to be a success, but rather to be of value. - Albert Einstein",
      // Add more quotes as needed
    ];

    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    };

    setRandomQuote(getRandomQuote());

    // Fetch a random image from Unsplash
    fetch("https://source.unsplash.com/1600x400/?event")
      .then((response) => setCoverImageUrl(response.url))
      .catch((error) => console.error("Error fetching image:", error));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="relative mt-5 overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="relative p-6 flex items-center">
          <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
            <Avatar src={user.picture} alt={user.name} size={128} />
          </div>
          <div className="ml-6">
            <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-sm text-gray-500">{user.email}</p>
            <p className="mt-4 text-gray-700">{randomQuote}</p>
            <div className="mt-4 flex space-x-3">
              <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <ShareAltOutlined className="mr-2" /> Share
              </button>
              <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
                <EditOutlined className="mr-2" /> Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
