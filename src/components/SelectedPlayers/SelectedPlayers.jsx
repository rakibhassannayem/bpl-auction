import SelectedCards from "../SelectedCards/SelectedCards";

const SelectedPlayers = ({ purchasedPlayers, removePlayer, setToggle }) => {
  return (
    <div className="max-w-7xl mx-auto">
      {purchasedPlayers.map((player) => (
        <SelectedCards removePlayer={removePlayer} player={player} key={player.id}></SelectedCards>
      ))}
      <button onClick={()=>setToggle(true)} className="btn bg-yellow-300 rounded-xl font-bold my-3">Add More Player</button>
    </div>
  );
};

export default SelectedPlayers;
