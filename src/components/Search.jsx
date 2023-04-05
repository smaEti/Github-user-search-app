import { BsSearch } from 'react-icons/bs';
const Search = (props) => {
  return (
    <div className="w-full md:h-24 h-18 dark:bg-darkBackground2 bg-lightBackground dark:shadow-none shadow-md shadow-gray-400 rounded-xl flex justify-between px-2 items-center gap-3 md:gap-8 md:px-5">
      <div className="text-blue-500 font-semibold text-2xl md:text-4xl">
        <BsSearch />
      </div>
      <input
        onChange={(e) => props.onSearch(e.target.value)}
        type="text"
        className="bg-lightBackground font-BreeSerif-regular  text-xs md:text-xl dark:text-white focus:outline-none dark:bg-darkBackground2 h-full w-10/12 border-none"
        placeholder="Search GitHub Username..."
      />
      <button
        onClick={props.devFinder}
        className="text-white bg-blue-500 md:text-2xl text-xl w-32 font-BreeSerif-regular shadow-gray-400 dark:shadow-gray-900 shadow-md active:bg-blue-600 md:w-36 h-4/6 rounded-2xl"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
