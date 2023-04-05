import { IoLocationSharp } from 'react-icons/io5';
import { HiLink } from 'react-icons/hi';
import { BsTwitter, BsFillBuildingFill, BsLink45Deg } from 'react-icons/bs';
const Profile = (props) => {
  if (props.data.message == undefined) {
    return (
      <div className="w-full  dark:bg-darkBackground2 bg-lightBackground dark:shadow-none shadow-md shadow-gray-400 rounded-xl flex justify-between items-center md:gap-8 md:px-5">
        <div className=" xl:flex w-full px-3 md:px-0 md:mt-16 md:mr-8">
          <div className=" xl:w-1/3 w-1/2 text-center flex justify-center md:grow-0">
            <img
              className="max-w-none rounded-full md:h-56 w-3/4 "
              src={props.data?.avatar_url}
              alt="Picture-Profile"
            />
          </div>
          <div className="md:flex-grow mt-4 md:mt-0">
            <div className="flex justify-between items-center ">
                <h1 className="font-BreeSerif-regular tracking-wider dark:text-white font-bold md:text-4xl">
                  {props.data?.name}
                </h1>
              <p className="text-gray-500 font-semibold font-mono text-sm">
                Joined at {props.data?.created_at?.slice(0, 10)}
              </p>
            </div>
            <p className="text-blue-600 dark:text-blue-500 tracking-wider font-BreeSerif-regular mt-1 md:mt-3">
              @{props.data?.login}
            </p>
            <p className="text-gray-400 tracking-wider font-mono font-semibold mt-2 md:mt-8">
              {props.data?.bio}
            </p>
            <div className="md:w-full md:px-0 mt-2 px-2 md:h-32 h-24 dark:bg-darkBackground bg-lightBackground2 dark:text-white font-mono tracking-wider md:text-lg text-md text-center rounded-3xl md:mt-10 flex justify-around items-center md:gap-12">
              <div>
                <p>Repos</p>
                <p className="font-bold text-xl">{props.data?.public_repos}</p>
              </div>
              <div>
                <p>Followers</p>
                <p className="font-bold text-xl">{props.data?.followers}</p>
              </div>
              <div>
                <p>Following</p>
                <p className="font-bold text-xl">{props.data?.following}</p>
              </div>
            </div>
            <div className="font-mono dark:text-white md:text-lg text-sm mb-6 md:mb-12 flex items-center justify-around gap-12 mt-4 md:mt-14">
              <div className="flex items-center md:gap-4 gap-2">
                <div className="flex flex-col md:gap-10 gap-5">
                  <IoLocationSharp />
                  <BsTwitter />
                </div>
                <div className="flex flex-col md:gap-8 gap-2">
                  <p className="dark:text-gray-400 text-gray-500">
                    {props.data?.location
                      ? props.data?.location
                      : 'Not Available'}
                  </p>
                  <p className="dark:text-gray-400 text-gray-500">
                    {props.data?.twitter_username
                      ? props.data?.twitter_username
                      : 'Not Available'}
                  </p>
                </div>
              </div>
              <div className="flex items-center md:gap-4 gap-2">
                <div className="flex flex-col md:gap-11 gap-4">
                  <BsFillBuildingFill />
                  <HiLink />
                </div>
                <div className="flex flex-col md:gap-8 gap-2">
                  <p className="dark:text-gray-400 text-gray-500">
                    {props.data?.company
                      ? props.data?.company
                      : 'Not Available'}
                  </p>
                  <a
                    className=" dark:text-gray-400 text-gray-500"
                    href={props.data?.blog ? props.data?.blog : ''}
                  >
                    {props.data?.blog ? props.data?.blog : 'Not Available'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center dark:text-white font-BreeSerif-regular font-semibold text-3xl">
        {props.data.message == 'Request failed with status code 404'
          ? 'Not Found - 404'
          : props.data.message}
      </div>
    );
  }
};

export default Profile;
