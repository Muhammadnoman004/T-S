import { useState } from "react";
import Buttons from "./Buttons";

interface CardPropsType {
  title: string;
  description?: string;
}
type id = number;

interface ObjType {
  name: string;
  cell_no: number;
  age: number;
}

const Card: React.FC<CardPropsType> = ({ title, description }) => {
  const number: id = 123;

  const [increament, setIncreament] = useState<number>(0);

  const buttonFunc = () => {
    setIncreament(increament + 1);
    console.log(increament);
  };

  const data: ObjType = {
    name: "noman",
    cell_no: 953,
    age: 18,
  };

  return (
    <div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{number}</p>
      </div>
      <div>
        <ul>
          <li>{data.name}</li>
          <li>{data.cell_no}</li>
          <li>{data.age}</li>
        </ul>
      </div>
      <Buttons handleClick={buttonFunc} value="count" />
    </div>
  );
};

export default Card;
