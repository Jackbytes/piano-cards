const BrutalButton = (props) => {
  const customCss = ` bg-${props.color}-500 active:bg-${props.color}-900 hover:bg-${props.color}-700`;

  return (
    <button
      type="button"
      className={
        "px-4 py-2 my-2 text-white border-2 border-pink-400 active:brutal-click box-shadow-black" +
        customCss
      }
    >
      {props.children}
    </button>
  );
};

export default BrutalButton;
