import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs";

const AnimatedSearchBar = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleSearchBar = () => {
      setExpanded(!expanded);
    };
  
    const searchBarWidth = expanded ? 'w-32' : 'w-0';
    return (
        <div className="flex items-center">
        <input
          className={`transition-width duration-300 ease-in-out ${searchBarWidth}`}
          type="text"
          placeholder="Search..."
        />
        <button
          className="ml-2 p-1 rounded-full"
          onClick={toggleSearchBar}
        >
          <BsSearch />
            
        </button>
      </div>
    );
};

export default AnimatedSearchBar;