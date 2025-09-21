import navLogo from '../../assets/logo.png'
import dollarCoin from "../../assets/dollarCoin.svg";
const Navbar = () => {
  return (
    <div className="navbar max-w-7xl mx-auto">
      <div className="flex-1">
        <a className="text-xl cursor-pointer">
          <img className="w-14" src={navLogo} alt="" />
        </a>
      </div>
      <div className="flex gap-2 font-semibold">
        <span>60000000</span>
        <span>Coin</span>
        <img src={dollarCoin} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
