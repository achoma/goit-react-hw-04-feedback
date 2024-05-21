import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

// import css from '../styles/FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <ul className={css.list}>
      {options.map(option => (
        <li className={css.listItem} key={option}>
          <button
            className={css[option]}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
