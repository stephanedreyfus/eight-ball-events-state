// This files contains examples of React misunderstandings. Not only do I mutate state
// In the setCount with '+=', but I am dealing with 'stale' state not because
// of state, but because I'm changig info, which doesn't change during the function!

import React from "react";
import Reset from './Reset';
import useAsyncReference from './helpers';
import ColorCount from './ColorCount';
import './EightBall.css';

const EightBall = ({ answers, initial, zeroCount }) => {
  const [info, setInfo] = useAsyncReference(initial);
  console.log("zeroCount before initialize state", zeroCount);
  const [count, setCount] = useAsyncReference(zeroCount);
  console.log("zeroCount after initialize state", zeroCount);
  
  const handleClick = () => {
    console.log("What is zerocount at top of click?", zeroCount);
    console.log("What is initial?", initial);
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
    setInfo(initial, true);
    setCount(zeroCount, true);
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