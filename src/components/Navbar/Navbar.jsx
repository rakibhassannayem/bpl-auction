import navLogo from "../../assets/logo.png";
import dollarCoin from "../../assets/dollarCoin.svg";
const Navbar = ({ availableBalance, setToggle }) => {
  return (
    <div className="navbar max-w-7xl mx-auto">
      <div className="flex-1">
        <a className="text-xl cursor-pointer">
          <img onClick={()=>setToggle(true)} className="w-14" src={navLogo} alt="" />
        </a>
      </div>
      <div className="flex gap-2 font-semibold border border-gray-300 p-3 rounded-xl">
        <img src={dollarCoin} alt="" />
        <span>{availableBalance}</span>
        <span>Coin</span>
      </div>
    </div>
  );
};

export default Navbar;
