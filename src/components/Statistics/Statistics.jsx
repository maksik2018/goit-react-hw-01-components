import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import randomColor from 'randomcolor';

function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statisticsList}>
        {stats.map(({id, label, percentage}) => (
          <li
            style={{ backgroundColor: randomColor() }}
            key={id}
            className={css.item}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
export default Statistics;




























// import PropTypes from 'prop-types';
// import css from './Statistics.module.css';
// import randomColor from 'randomcolor';

// function Statistics ( {title}, {statistics} ) {
//     return (
//          <section className={css.statistics}>
//         {title && <h2 className={css.title}>{title}</h2>}
//     <ul className={css.statList}>
//       { statistics.map(({ id, label, percentage}) => ( 
//       <li
//           style={{ backgroundColor: randomColor() }}
//           key={id}
//           className={css.item}
//         >
//              <span className={css.label}>{label}</span>
//             <span className={css.percentage}>{percentage}</span>
//           </li>
            
//       ))}

//        </ul>
// </section>
//     )
//   };

// // Statistics.propTypes = {
// //     title: PropTypes.string.isRequired,
// //   }
// Statistics.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     }).isRequired,
//   ).isRequired,
// };


// export default Statistics;
