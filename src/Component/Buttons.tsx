type buttonTextType = {
  value?: string;
  handleClick?: () => void;
};

// const text: buttonTextType = "Save";

const Buttons: React.FC<buttonTextType> = ({ value, handleClick }) => {
  const sum = (a: number, b: number): void => {
    let result = a + b;
    console.log(result);
  };

  return (
    <div>
      <button onClick={() => sum(1, 3)}>{value}</button>
    </div>
  );
};

export default Buttons;
