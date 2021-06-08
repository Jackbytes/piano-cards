const OnShowTitle = (props) => {
  return (
    <div className="flex flex-col p-10 place-items-center place-content-around">
      <h1 className="text-xl italic text-center fancy-type md:text-3xl">
        {props.mainTitle}
      </h1>
      <h2 className="text-sm tracking-widest text-gray-600 fancy-type md:text-xl">
        {props.subTitle}
      </h2>
    </div>
  );
};

export default OnShowTitle;
