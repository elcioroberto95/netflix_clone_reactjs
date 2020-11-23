const API_KEY = `9916ecbf5f6b23f89e40ee865b0c92c2`;
const API_BASE = `https://api.themoviedb.org/3`;
//originais
//rencomendados
//em alta
//ação
//comedia
const basicFetch = async (endpoint) => {
  const response = await fetch(`${API_BASE}${endpoint}`);
  const json = await response.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originais',
        title: 'Originais da netflix',
        items: await basicFetch(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'trending',
        title: 'Recomendados para você',
        items: await basicFetch(
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: await basicFetch(
          `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'Action',
        title: 'Ação',
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'comedy',
        title: 'Comedia',
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'documentary',
        title: 'Documentarios',
        items: await basicFetch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
    ];
  },
  getMovieInfo: async (id, type) => {
    let info = {};
    if (id) {
      switch (type) {
        case 'movie':
          info = await basicFetch(
            `/movie/${id}?language=pt-BR&api_key=${API_KEY}`,
          );
          break;
        case 'tv':
          info = await basicFetch(
            `/tv/${id}?language=pt-BR&api_key=${API_KEY}`,
          );

          break;
      }
    }

    return info;
  },
};
