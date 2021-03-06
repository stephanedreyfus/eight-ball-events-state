import React, { useState } from "react";
import Reset from './Reset';
import ColorCount from './ColorCount';
import './EightBall.css';

const EightBall = ({ answers, initial, zeroCount }) => {
  console.log("render");
  // const [info, setInfo] = useAsyncReference(initial);
  // const [count, setCount] = useAsyncReference(zeroCount);
  
  const [info, setInfo] = useState(initial);
  const [count, setCount] = useState(zeroCount);

  const handleClick = () => {
    console.log("What is zerocount?", zeroCount);
    console.log("What is initial?", initial);
    const newInfo = answers[Math.floor(Math.random() * answers.length)];
    setInfo(newInfo);

    if (newInfo.color === "red") {
      setCount(c => ({...c, ...{red: (c.red + 1)}}));
    }
    else if (newInfo.color === "goldenrod") {
      setCount(c => ({...c, ...{golden: (c.golden + 1)}}));
    }
    else if (newInfo.color === "green") {
      setCount(c => ({...c, ...{green: (c.green + 1)}}));
    }
  };

  const handleReset = () => {
    setInfo(initial);
    setCount(zeroCount);
    console.log("reset", initial, zeroCount);
  }

  return (
    <div className="ball-container">
      <div className="ball" style={{background: info.color}} onClick={handleClick}>
        <span className="ball-text">{info.msg}</span>
      </div>
      <Reset handleReset={handleReset}/>
      <ColorCount count={count}/>
    </div>
  );
};

EightBall.defaultProps = {
  answers: [
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
  ],
  initial: {msg: "Think of a question.", color: "black"},
  zeroCount: {green: 0, golden: 0, red: 0}
}

export default EightBall;