import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const Statistics = ({ title, statistics }) => {
  return (
    <section className={style.statsSection}>
      {title.length > 0 && <h2 className={style.title}>{title}</h2>}
      <ul className={style.statList}>
        {statistics.map(item => (
          <li key={item.id} className={style.item}>
            <span className={style.label}>{item.label}</span>
            <span className={style.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: 'Upload stats',
};

Statistics.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Statistics;
