import React from "react";
import Reset from './Reset';
import useAsyncReference from './helpers';
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

const zeroCount = {green: 0, golden: 0, red: 0};


const EightBall = () => {
  const [info, setInfo] = useAsyncReference(initial);
  const [count, setCount] = useAsyncReference(zeroCount);
  
  // FIX ME: Due to state timing, color count is off.
  const handleClick = () => {

    setInfo(answers[Math.floor(Math.random() * answers.length)]);

    if (info.current.color === "red") {
      let addOne = {red: (count.current.red += 1)};
      setCount({...count.current, ...addOne});
    }
    else if (info.current.color === "goldenrod") {
      let addOne = {golden: (count.current.golden += 1)};
      setCount({...count.current, ...addOne});
    }
    else if (info.current.color === "green") {
      let addOne = {green: (count.current.green += 1)};
      setCount({...count.current, ...addOne});
    };
  };

  const handleReset = () => {
    setInfo(initial);
    setCount(zeroCount);
  }

  return (
    <div className="ball-container">
      <div className="ball" style={{background: info.current.color}} onClick={handleClick}>
        <span className="ball-text">{info.current.msg}</span>
      </div>
      <Reset handleReset={handleReset}/>
      <ColorCount count={count.current}/>
    </div>
  );
};

export default EightBall;