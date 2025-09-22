import React from 'react';

const SelectedPlayers = ({purchasedPlayers}) => {
  console.log(purchasedPlayers)
  return (
    <div className='max-w-7xl mx-auto'>
      <h1 className='text-xl font-bold'>Selected: {purchasedPlayers.length}</h1>
    </div>
  );
};

export default SelectedPlayers;