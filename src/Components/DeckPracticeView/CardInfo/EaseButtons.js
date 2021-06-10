const EaseButtons = () => {
  return (
    <div className="flex flex-row flex-wrap place-content-evenly left-and-fade">
      <button
        type="button"
        className="px-4 py-1 text-white bg-green-500 border-2 border-pink-400 hover:bg-green-700 box-shadow-black"
      >
        EASY
      </button>
      <button
        type="button"
        className="px-4 py-1 text-white bg-indigo-500 border-2 border-pink-400 hover:bg-indigo-700 box-shadow-black"
      >
        OK
      </button>
      <button
        type="button"
        className="px-4 py-1 text-white bg-red-500 border-2 border-pink-400 hover:bg-red-700 box-shadow-black"
      >
        HARD
      </button>
    </div>
  );
};

export default EaseButtons;
