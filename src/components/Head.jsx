import { FaMoon } from 'react-icons/fa';
import { BsFillSunFill } from 'react-icons/bs';
const Head = (props) => {
    return (
    <div className='flex justify-between'>
    <h1 className="text-4xl font-bold text-center font-BreeSerif-regular dark:text-slate-50">
      DevFinder
    </h1>
    <div className='flex gap-5 cursor-pointer' onClick={props.onClick}>
    <button
      className="text-xl font-BreeSerif-regular tracking-widest text-black dark:text-slate-50 flex items-center justify-center"
      >
      {!props.darkToggle ? 'DARK' : 'LIGHT'}
    </button>
    <button
      className="text-xl font-BreeSerif-regular text-black dark:text-slate-50 flex items-center justify-center"
      >
      {!props.darkToggle ? <FaMoon /> : <BsFillSunFill />}
    </button>
      </div>
  </div>
  )
}

export default Head;