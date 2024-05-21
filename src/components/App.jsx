import React, { useState } from 'react';
import css from './App.module.css';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const newFeedback = name => {
    setFeedback(prevState => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.floor((feedback.good / total) * 100);
  };

  return (
    <div className={css.main}>
      <Section title="Please Leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={newFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback yet..." />
        ) : (
          <Statistics
            options={Object.keys(feedback)}
            statistic={feedback}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
