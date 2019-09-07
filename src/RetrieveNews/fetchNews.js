const UPDATE_NEWS = "UPDATE_NEWS";
const FETCH_NEWS_FAILED = "FETCH_NEWS_FAILED";

const fetchNews = (country) => dispatch => {
  return fetch("https://newsapi.org/v2/top-headlines?apiKey=e0591bcd152f4ee0957aadb4c1351791&pagesize=10&country=" + country)
  .then(response => response.json())
  .then(news => {
    dispatch({
      type: UPDATE_NEWS,
      value: news.articles
    }).then(console.log(news.articles));
  })
  .catch(e => {
    dispatch({
      type: FETCH_NEWS_FAILED,
      e: e
    });
  });
};

export default fetchNews;