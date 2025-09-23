import { Suspense, useState } from "react";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import { ToastContainer } from "react-toastify";
import Banner from "./components/Banner/Banner";

const fetchedPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const playersPromise = fetchedPlayers();

function App() {
  const [availableBalance, setAvailableBalance] = useState(6000000);
  const [toggle, setToggle] = useState(true);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);
  const removePlayer = (p) => {
    const price = parseInt(p.price.split(",").join(""));
    const filteredPlayer = purchasedPlayers.filter((pId) => pId.id !== p.id);
    setPurchasedPlayers(filteredPlayer);
    setAvailableBalance(availableBalance + price);
  };
  return (
    <>
      <Navbar
        setToggle={setToggle}
        availableBalance={availableBalance}
      ></Navbar>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto flex justify-between items-center my-5">
        <h1 className="text-xl font-bold mx-3">
          {toggle
            ? "Available Players"
            : `Selected Players (${purchasedPlayers.length}/6)`}
        </h1>
        <div className="mx-3">
          <button
            onClick={() => setToggle(true)}
            className={`btn border-r-0 rounded-r-none px-4 py-3 ${
              toggle ? "font-bold bg-yellow-300" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`btn border-l-0 rounded-l-none px-3 py-3 text-gray-600 ${
              toggle ? "" : "font-bold bg-yellow-300"
            }`}
          >
            Selected<span>({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>

      {toggle ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AvailablePlayers
            playersPromise={playersPromise}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          setToggle={setToggle}
          purchasedPlayers={purchasedPlayers}
          setPurchasedPlayers={setPurchasedPlayers}
          removePlayer={removePlayer}
        ></SelectedPlayers>
      )}

      <ToastContainer />
    </>
  );
}

export default App;
