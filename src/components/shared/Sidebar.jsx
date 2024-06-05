import { Link } from 'react-router-dom';
import { useContext } from 'react';
import image3 from '../../assets/image 3.png';
import completed1 from '../../assets/completed 1.png';
import wallet1 from '../../assets/wallet (1) 1.png';
import usersMedical1 from '../../assets/users-medical 1.png';
import phoneCall1 from '../../assets/Vector.png';
import layout from '../../assets/layout.png';
import { StoreContext } from '../../context/context';


function Sidebar() {
  const { toggle, setToggle } = useContext(StoreContext);

  return (
    <div>
      <div className={`sidebar w-[243px] h-[900px] bg-[#323232] ${toggle ? 'block' : 'hidden'} sm:block`}>
        <div className="logo flex w-[193px] h-[35px] justify-around text-white p-4 gap-1">
          <img className="h-[32px]" src={image3} alt="Chainmate Logo" />
          <h1 className="font-bold text-2xl">
            <Link to="/">CHAINMATE</Link>
          </h1>
        </div>
        <hr className="mt-[46px]" />
        <div className="menu">
          <ul>
            <li className="flex gap-2 bg-[#FF9F2E] p-2 m-4 ml-6 rounded-lg text-[#ffff]">
              <img src={layout} alt="Dashboard Icon" /> Dashboard
            </li>
            <li className="flex text-center p-2 gap-2 text-[#ffff] m-4 text-base">
              <img src={completed1} alt="Task Icon" /> Task
            </li>
            <li className="flex items-center p-2 gap-2 text-[#ffff] m-4 text-base">
              <img src={wallet1} alt="Wallet Icon" /> Wallet
            </li>
            <li className="flex items-center p-2 gap-2 text-[#ffff] m-4 text-base">
              <img src={usersMedical1} alt="Community Icon" /> Community
            </li>
            <li className="flex items-center p-2 gap-2 text-[#ffff] m-4 text-base">
              <img src={phoneCall1} alt="Contact Us Icon" /> Contact Us
            </li>
            <li className="flex items-center justify-center p-2 m-4">
              <Link
                to="/addUser"
                className="flex items-center w-48 justify-center px-5 py-2 gap-2 text-[#ffff] text-center text-base cursor-pointer bg-[#FF9F2E] rounded-full border-none hover:bg-[#e06843]"
              >
                GET TOUCH
              </Link>
            </li>
            <li className="flex items-center justify-center p-2 m-4">
              <Link
                to="/userList"
                className="flex items-center w-48 justify-center px-5 py-2 gap-2 text-[#ffff] text-center text-base cursor-pointer bg-[#FF9F2E] rounded-full border-none hover:bg-[#e06843]"
              >
                Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
