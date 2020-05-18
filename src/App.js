//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import BottomRow from "./BottomRow";
import "./App.css";
import { render } from "react-dom";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [stateScore, setStateScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [timer, setTimer] = useState(0);

  const timing = e => {
    setTimer(setInterval(timer + 1), 1000)
  }

  const stateFg = e => {
    setStateScore(stateScore + 3)
  }

  const stateTd = e => {
    setStateScore(stateScore + 7)
  }

  const awayFg = e => {
    setAwayScore(awayScore + 3)
  }

  const awayTd = e => {
    setAwayScore(awayScore + 7);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{stateScore}</div>
          </div>
          <div onClick = {timing} className="timer">{timer}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = {stateTd} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {stateFg} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick = {awayTd} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {awayFg} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);

export default App;
