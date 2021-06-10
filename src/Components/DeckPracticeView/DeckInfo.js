const DeckInfo = (props) => {
  return (
    <div className="flex flex-col p-10 place-items-center place-content-around">
      <h1 className="font-mono text-xl italic font-bold text-center md:text-3xl">
        {props.mainTitle}
      </h1>
      <h2 className="font-mono text-sm font-light tracking-widest text-gray-600 md:text-xl">
        {props.subTitle}
      </h2>
    </div>
  );
};

export default DeckInfo;
