import React, { useState } from "react";
import Reset from './Reset';
import ColorCount from './ColorCount';
import './EightBall.css';

const initial = {msg: "Think of a question.", color: "black"};

const answers = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];


const EightBall = () => {
  const [info, setInfo] = useState(initial);
  const [count, setCount] = useState(
      {
        green: 0,
        golden: 0,
        red: 0,
      }
    );
  
  const handleClick = () => {
    setInfo(answers[Math.floor(Math.random() * answers.length)]);
    if (info.color === "red") {
      let addOne = {red: (count.red += 1)};
      setCount({...count, ...addOne});
    }
    else if (info.color === "goldenrod") {
      let addOne = {red: (count.golden += 1)};
      setCount({...count, ...addOne});
    }
    else {
      let addOne = {red: (count.green += 1)};
      setCount({...count, ...addOne});
    };
  };

  const handleReset = () => {
    setInfo(initial);
  }

  return (
    <div className="ball-container">
      <div className="ball" style={{background: info.color}} onClick={handleClick}>
        <span className="ball-text">{info.msg}</span>
      </div>
      <Reset handleReset={handleReset}/>
      <ColorCount seen={count}/>
    </div>
  );
};

export default EightBall;