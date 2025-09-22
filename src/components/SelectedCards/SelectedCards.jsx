import deleteBin from "../../assets/trashBin.png";

const SelectedCards = ({ player }) => {
  const { img, name, role } = player;
  return (
    <div className="border border-gray-300 rounded-xl flex justify-between items-center p-3 mt-3">
      <div className="flex items-center">
        <img className="w-20 h-18 rounded-lg mr-3" src={img} alt="" />
        <div>
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-gray-500 font-medium">{role}</p>
        </div>
      </div>
      <img className="cursor-pointer" src={deleteBin} alt="" />
    </div>
  );
};

export default SelectedCards;
