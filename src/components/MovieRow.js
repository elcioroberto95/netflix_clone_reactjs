import React from 'react';
import styles from './MovieRow.module.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const MovieRow = ({ title, items }) => {
  const [scrollX, setScrollx] = React.useState(0);

  const handleLeft = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollx(x);
  };
  const handleRight = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollx(x);
  };
  return (
    <div className={styles.movieRow}>
      <h2>{title}</h2>
      <div onClick={handleLeft} className={styles.movieRowLeft}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div onClick={handleRight} className={styles.movieRowRight}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>
      <div className={styles.movieRowListaArea}>
        <div
          className={styles.movieRowList}
          style={{
            marginLeft: scrollX,
            width: items.results.length * 150,
          }}
        >
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
