import React, { useEffect } from 'react';
import MovieRow from './components/MovieRow';
import FeatureMovie from './components/FeatureMovie';
import Header from './components/Header/Header';
import Tmdb from './Tmdb';
import './App.css';
const { getHomeList, getMovieInfo } = Tmdb;

const App = () => {
  const [movieList, setMovieList] = React.useState([]);
  const [featureData, setFeatureData] = React.useState(null);
  const [blackHeader, setBlackHeader] = React.useState(false);
  useEffect(() => {
    ////getting data
    const loadAll = async () => {
      let list = await getHomeList();
      setMovieList(list);
      const originais = list.filter((list) => list.slug === 'originais');

      const quantidade = Math.floor(
        Math.random() * (originais[0].items.results.length - 1),
      );
      console.log(quantidade);
      const randomFilme = originais[0].items.results[quantidade];
      console.log(randomFilme);
      const infoFilm = await getMovieInfo(randomFilme.id, 'tv');

      setFeatureData(infoFilm);
    };
    loadAll();
  }, []);
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />
      {featureData && <FeatureMovie data={featureData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};
export default App;
