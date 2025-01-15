import React from "react";

const Stories = () => {
  const storyData = [
    { id: 1, username: "Abhay@17_23", image: "https://picsum.photos/seed/user1/100" },
    { id: 2, username: "Ashu67..", image: "https://picsum.photos/seed/user2/100" },
    { id: 3, username: "1_abhi", image: "https://picsum.photos/seed/user3/100" },
    { id: 4, username: "@18yash", image: "https://picsum.photos/seed/user4/100" },
    { id: 5, username: "y@shika28", image: "https://picsum.photos/seed/user5/100" },
    { id: 6, username: "kimjong", image: "https://picsum.photos/seed/user6/100" },
    { id: 7, username: "itsputin", image: "https://picsum.photos/seed/user7/100" },
    { id: 8, username: "manojtiwari", image: "https://picsum.photos/seed/user8/100" },
  ];

  return (
    <div className="flex items-center   space-x-4 overflow-x-auto scrollbar-hide p-4  rounded-lg shadow-md">
      {storyData.map((story) => (
        <div key={story.id} className="flex flex-col items-center">
          <div className="border-2 border-pink-500 rounded-full p-[2px]">
            <img
              src={story.image}
              alt={`${story.username}'s story`}
              className="h-16 w-16 rounded-full object-cover"
            />
          </div>
          <p className="text-sm text-gray-700 mt-2 truncate w-20 text-center">
            {story.username}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stories;
