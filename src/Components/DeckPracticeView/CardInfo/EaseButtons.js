const EaseButtons = () => {
  return (
    <div className="flex flex-row flex-wrap place-content-evenly">
      <button className="px-4 py-1 text-white bg-green-500 box-shadow-black">
        EASY
      </button>
      <button className="px-4 py-1 text-white bg-indigo-500 box-shadow-black">
        OK
      </button>
      <button className="px-4 py-1 text-white bg-red-500 box-shadow-black">
        HARD
      </button>
    </div>
  );
};

export default EaseButtons;
