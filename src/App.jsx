/* Todo:* unicafe valmis -> anekdootit*/

import { useState } from "react";

const Tilasto = (props) => {
  if (props.all < 1) {
    return (
      <>
        <h2>statistics</h2>
        <p>no feedback given</p>
      </>
    );
  } else {
    return (
      <>
        <h2>statistics</h2>
        <table>
          <tbody>
            <Tilastorivi text="good" value={props.good} />
            <Tilastorivi text="neutral" value={props.neutral} />
            <Tilastorivi text="bad" value={props.neutral} />
            <Tilastorivi text="all" value={props.all} />
            <Tilastorivi text="average" value={props.average} />
            <Tilastorivi text="percent positive" value={props.percent} />
          </tbody>
        </table>
      </>
    );
  }
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const Tilastorivi = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    setAll(all + 1);
    setTotal(total + 1);
    setPositive(positive + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
    setTotal(total - 1);
  };
  let average;

  if (all > 0) {
    average = total / all;
  } else {
    average = 0;
  }
  let percent;

  if (all > 0) {
    percent = (good / all) * 100;
  } else {
    percent = 0;
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <Tilasto
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        percent={percent}
      />
    </div>
  );
};

export default App;
