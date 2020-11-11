import React, { useState } from "react";
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
  
  const handleClick = e => {
    console.log(e.target);
    setInfo(answers[Math.floor(Math.random() * answers.length)]);
    console.log(info)
  }

  return (
    <div className="ball-container">
      <div className="ball" style={{background: info.color}} onClick={handleClick}>
        <span className="ball-text">{info.msg}</span>
      </div>
    </div>
  );
}

export default EightBall;