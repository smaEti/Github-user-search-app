import { useEffect, useState, useRef } from 'react';
import Head from './components/Head';
import Search from './components/Search';
import Profile from './components/Profile';
import './App.css';

function App() {
  //keeps the things that user is typing in search bar
  let [searchData, setSearchData] = useState('');
  const [profileData, setProfileData] = useState(null);
  // loading state for async function
  const [loading, setLoading] = useState(false);
  //gets the data from the api that is created in server (server/index.js)
  async function devFinder(searchData){
    setLoading(true);
    const response = await fetch(`http://localhost:3000/?q=${searchData}`);
    const data = await response.json();
    setProfileData(data);
    setLoading(false);
  };
  //state for dark mode 
  let [darkToggle, setDarkToggle] = useState(true);
  //refrence to a wrapper div that will hold the whole app
  let screenRef = useRef(null);
  useEffect(() => {
    //changing the theme when dark toggle state changes
    darkToggle
      ? screenRef?.current?.classList.add('dark')
      : screenRef?.current?.classList.remove('dark');
  }, [darkToggle]);
  return (
    <div ref={screenRef} className='min-h-full'>
      <div className="min-h-screen w-full bg-lightBackground2 dark:bg-darkBackground ">
        <div className="md:w-6/12 w-11/12 mx-auto container md:pt-32 flex flex-col gap-4 md:gap-8 ">
          <Head
            darkToggle={darkToggle}
            onClick={() => setDarkToggle(!darkToggle)}
          />
          <Search onSearch={setSearchData} devFinder={() => devFinder(searchData)} />
          {loading?<div className="flex justify-center items-center dark:text-white font-BreeSerif-regular font-semibold text-3xl">Loading...</div>: ''}
          {profileData != null?<Profile data={profileData} />: ''}
        </div>
      </div>
    </div>
  );
}

export default App;
