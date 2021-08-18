import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistic.module.css';

const Statistics = ({ title, stats }) => (
  <section className={styles.section}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.list}>
      {stats.map(({ id, label, percentage }) => (
        <li key={id}>
          <span className={styles.label}>{label}</span>
          <span>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);
Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
