import "./Button.css";
const Button = (props) => {
  const { name = "", ButtonFunction, ButtonStyle, elem = {} } = props;
  return (
    <>
      <button
        onClick={() => ButtonFunction(elem)}
        className={`btn button-bg shadow-sm  d-flex justify-content-center align-items-center ${ButtonStyle}`}
      >
        {name}
      </button>
    </>
  );
};

export default Button;
