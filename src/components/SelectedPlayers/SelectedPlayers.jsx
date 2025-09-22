import SelectedCards from "../SelectedCards/SelectedCards";

const SelectedPlayers = ({ purchasedPlayers }) => {
  return (
    <div className="max-w-7xl mx-auto">
      {purchasedPlayers.map((player) => (
        <SelectedCards player={player} key={player.id}></SelectedCards>
      ))}
    </div>
  );
};

export default SelectedPlayers;
