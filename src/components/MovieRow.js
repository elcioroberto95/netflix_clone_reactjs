import React from 'react';
import styles from './MovieRow.module.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const MovieRow = ({ title, items }) => {
  return (
    <div className={styles.movieRow}>
      <h2>{title}</h2>
      <div className={styles.movieRowLeft}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className={styles.movieRowRight}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>
      <div className={styles.movieRowListaArea}>
        <div className={styles.movieRowList}>
          {items.results.map((item, key) => (
            <div key={key} className={styles.movieRowItem}>
              <img
                key={key}
                alt={item.name}
                src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieRow;
