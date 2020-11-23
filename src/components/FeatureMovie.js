import React from 'react';
import styles from './FeatureMovie.module.css';
const FeatureMovie = ({ data }) => {
  console.log(data);

  const firstDate = new Date(data.first_air_date);
  let genres = [];
  for (let i in data.genres) {
    genres.push(data.genres[i].name);
  }
  let description = data.overview;
  if (description.length > 200) {
    description = description.substring(0, 200) + '...';
  }
  console.log(firstDate);
  return (
    <section
      className={styles.featured}
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
      }}
    >
      <div className={styles.featuredVertical}>
        <div className={styles.featuredHorizontal}>
          <div className={styles.featuredName}>{data.original_name}</div>
          <div className={styles.featuredInfo}>
            <div className={styles.featuredPoints}>
              {data.vote_average} pontos
            </div>
            <div className={styles.featuredYear}>{firstDate.getFullYear()}</div>
            <div className={styles.featuredSeasons}>
              {data.number_of_seasons} Temporada
              {data.number_of_seasons !== 1 ? 's' : ''}
            </div>
          </div>

          <div className={styles.featuredDescription}>{description}</div>
          <div className={styles.buttons}>
            <a className={styles.watchButton} href={`/watch/${data.id}`}>
              ► Assistir
            </a>
            <a className={styles.myListButton} href={`/list/add/${data.id}`}>
              + Minha lista
            </a>
          </div>
          <div className={styles.featuredGenres}>
            <strong>Generos:{genres.join(', ', '')}</strong>
            ...
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureMovie;
