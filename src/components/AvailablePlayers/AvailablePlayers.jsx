import React, { use } from 'react';

const AvailablePlayers = ({playersPromise}) => {
  const playerData = use(playersPromise)
  console.log(playerData)
  return (
    <div>
      <h1>Available</h1>
    </div>
  );
};

export default AvailablePlayers;