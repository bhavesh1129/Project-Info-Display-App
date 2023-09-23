import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        onSearch(searchQuery); // Call the parent component's search function
    };

    return (
        <div className="flex flex-col items-center justify-center mb-4">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border p-2 rounded-full w-96"
                />
                <button
                    onClick={handleSearch}
                    className="absolute right-0 top-0 bottom-0 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
