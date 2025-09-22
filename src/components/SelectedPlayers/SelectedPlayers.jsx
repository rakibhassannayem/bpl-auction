import SelectedCards from "../SelectedCards/SelectedCards";

const SelectedPlayers = ({ purchasedPlayers, removePlayer }) => {
  return (
    <div className="max-w-7xl mx-auto">
      {purchasedPlayers.map((player) => (
        <SelectedCards removePlayer={removePlayer} player={player} key={player.id}></SelectedCards>
      ))}
    </div>
  );
};

export default SelectedPlayers;
