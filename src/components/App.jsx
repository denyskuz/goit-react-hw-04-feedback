import React, { useState } from "react";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import classes from "./App.module.css"
import Notification from "./Notification";

export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleLeaveFeedback = (id) => {
    switch (id) {
      case 'good':
        setGood(good => good + 1);
        break;

      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;

      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        throw new Error('Not supported type');
    }
  }
  const options = {
    good,
    neutral,
    bad
  }

  const total = good + neutral + bad;
  const positivePercentage = Math.floor((good / total) * 100) + '%';
  return (
    <div className={classes.root}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {
          total ? 
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          /> :
          <Notification message="There is no feedback" />
        }
        
      </Section>
    </div>
  );

}
