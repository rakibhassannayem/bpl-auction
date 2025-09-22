import { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({
  playersPromise,
  availableBalance,
  setAvailableBalance,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  const playerData = use(playersPromise);
  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-3">
      {playerData.map((player) => (
        <PlayerCard
          player={player}
          key={player.id}
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
          purchasedPlayers={purchasedPlayers}
          setPurchasedPlayers={setPurchasedPlayers}
        ></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
