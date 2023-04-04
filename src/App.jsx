import { useEffect, useState, useRef } from 'react';
import Head from './components/Head';
import Search from './components/Search';
import Profile from './components/Profile';
import './App.css';

function App() {
  let [searchData, setSearchData] = useState('');
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(false);
  async function devFinder(searchData){
    setLoading(true);
    const response = await fetch(`http://localhost:3000/?q=${searchData}`);
    const data = await response.json();
    setProfileData(data);
    setLoading(false);
  };
  let [darkToggle, setDarkToggle] = useState(true);
  let screenRef = useRef(null);
  useEffect(() => {
    darkToggle
      ? screenRef?.current?.classList.add('dark')
      : screenRef?.current?.classList.remove('dark');
  }, [darkToggle]);
  return (
    <div ref={screenRef}>
      <div className="h-screen w-full bg-lightBackground2 dark:bg-darkBackground ">
        <div className="md:w-6/12 mx-auto container md:pt-32 flex flex-col md:gap-8 ">
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
