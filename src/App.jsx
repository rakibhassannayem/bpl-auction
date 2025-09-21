import { Suspense } from "react";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";

const fetchedPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const playersPromise = fetchedPlayers();
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>
    </>
  );
}

export default App;
