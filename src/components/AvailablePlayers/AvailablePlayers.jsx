import { use } from "react";

import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({ playersPromise, availableBalance, setAvailableBalance }) => {
  const playerData = use(playersPromise);
  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-3">
      {playerData.map((player) => (
        
        <PlayerCard availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player} key={player.id}></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
