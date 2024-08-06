import React from "react";

function TopTopics({ topic, setTopic }) {
  const topics = [
    "All",
    "Paris Olympics",
    "Prisoner Swaps",
    "2024 Campaign",
    "Middle East Tensions",
    "Tom Daley Sweater",
    "Sonya Massey",
    "Back-to-school-deals",
  ];

  return (
    <div>
      {/* <h1>Live Updates</h1> */}
      <div className="flex items-center justify-between font-semibold text-black text-md py-4 bg-gradient-to-r from-gray-400 to-gray-600 px-3 mt-4 rounded-lg">
        {topics.map((item) => (
          <p
            style={{ fontWeight: item === topic ? "bold" : "normal" }}
            onClick={() => setTopic(item)}
            className="hover:underline cursor-pointer hover:bg-gray-400 hover:p-3 active:scale-90  transition duration-200 ease-in-out rounded-md" 
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default TopTopics;
