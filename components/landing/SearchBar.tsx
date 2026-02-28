"use client";

export default function SearchBar() {
  return (
    <div className="flex h-16 w-full max-w-3xl bg-white rounded-full shadow-xl overflow-hidden">

      {/* Location Dropdown */}
      <div className="flex items-center px-5 border-r w-1/3">
        <span className="text-gray-600 text-lg">📍</span>
        <select className="ml-3 w-full outline-none text-gray-700 bg-transparent text-base">
          {/* <option>Enter Location</option> */}
          {/* <option>Gangtok</option>
          <option>Tadong</option>
          <option>Rangpo</option>
          <option>Namchi</option> */}
          <option>Majitar</option>

        </select>
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search rooms, PGs, Commercial..."
        className="flex-1 px-5 outline-none text-gray-700 text-base"
      />

      {/* Button */}
      <button className="bg-green-600 hover:bg-green-700 text-white px-10 font-semibold text-base transition">
        Search
      </button>
    </div>
  );
}