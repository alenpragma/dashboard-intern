import image3 from "../../assets/image 3.png";
import image2 from "../../assets/image 2.png";

function Navbar() {
  return (
    <div className="container flex justify-between items-center h-[82px] border-b border-gray-400 bg-[#1B1B1B] px-4 md:px-8 lg:px-14">
      <div className="header-left">
        <h1 className="text-white text-xl md:text-2xl font-bold">Dashboard</h1>
      </div>
      <div className="header-right flex gap-2">
        <img className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" src={image3} alt="Image 3" />
        <img className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" src={image2} alt="Image 2" />
      </div>
    </div>
  );
}

export default Navbar;
