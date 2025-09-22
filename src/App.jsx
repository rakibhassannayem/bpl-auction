import { Suspense, useState } from "react";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const fetchedPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const [toggle, setToggle] = useState(true);
  const playersPromise = fetchedPlayers();
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto flex justify-between items-center my-5">
        <h1 className="text-xl font-bold">Available Players</h1>
        <div>
          <button
            onClick={() => setToggle(true)}
            className="btn border-r-0 rounded-r-none px-4 py-3 font-bold bg-yellow-300"
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className="btn border-l-0 rounded-l-none px-3 py-3 text-gray-600"
          >
            Selected<span>(10)</span>
          </button>
        </div>
      </div>
      {toggle ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl max-w-7xl mx-auto"></span>
          }
        >
          <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
}

export default App;
