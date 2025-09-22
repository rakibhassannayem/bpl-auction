import userIcon from "../../assets/user.png";
import flagIcon from "../../assets/flagIcon.png";
import { useState } from "react";

const PlayerCard = ({ player, availableBalance, setAvailableBalance }) => {
  const [isSelected, setIsSelected] = useState(false);
  const price = player.price.split(",").join("");
  const handleSelected = () => {
    if (availableBalance < price) {
      return alert("not enough money");
    }
    setIsSelected(true);
    setAvailableBalance(availableBalance - price);
  };

  return (
    <div className="card bg-base-100 shadow-sm p-4">
      <img
        className="rounded-lg w-full h-60 object-cover"
        src={player.img}
        alt="Shoes"
      />

      <div className="card-body">
        <div className="flex items-center gap-1">
          <img className="w-5 h-5" src={userIcon} alt="" />
          <h2 className="card-title">{player.name}</h2>
        </div>

        <div className="flex items-center justify-between border-b border-gray-200 pb-3">
          <div className="flex gap-1 items-center text-gray-400 font-semibold">
            <img className="w-4 h-4" src={flagIcon} alt="" />
            <span>{player.country}</span>
          </div>
          <h3 className="font-semibold text-gray-600 bg-gray-100 rounded-xl px-3 py-2">
            {player.role}
          </h3>
        </div>

        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Rating</h3>
          <h3 className="font-semibold text-gray-500">{player.rating}</h3>
        </div>

        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{player.battingStyle}</h3>
          <h3 className="font-semibold text-gray-500">{player.bowlingStyle}</h3>
        </div>

        <div className="flex items-center justify-between">
          <h3 className="font-semibold">
            Price: $<span>{price}</span>
          </h3>
          <button
            disabled={isSelected}
            onClick={() => {
              handleSelected();
            }}
            className="btn bg-yellow-300 font-semibold"
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
