const OnShowTitle = (props) => {
  return (
    <div className="flex flex-row flex-wrap w-full place-items-center place-content-around border-red-50">
      <h1 className="font-mono text-lg text-center underline md:text-2xl ">
        {props.mainTitle}
      </h1>
      <h2 className="font-mono text-xs tracking-widest text-gray-400 md:text-sm">
        {props.subTitle}
      </h2>
    </div>
  );
};

export default OnShowTitle;
