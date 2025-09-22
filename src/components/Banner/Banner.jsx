import bgMain from "../../assets/banner-main.png";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-black bg-[url('./assets/bg-shadow.png')] py-20 flex flex-col gap-3 items-center justify-center rounded-3xl mx-2 text-center">
        <img src={bgMain} alt="" />
        <h1 className="text-2xl text-white font-bold">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="font-bold text-gray-300">
          Beyond Boundaries Beyond Limits
        </p>
        <button className="btn bg-yellow-300 rounded-lg font-bold border-0">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
