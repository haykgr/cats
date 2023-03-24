import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { resetCats, setCategories, setCats, setPage } from "./app/actions";
import { LIMIT } from "./app/constants";
import { RootState } from "./app/store";
import { fetchCategories } from "./services/categoryService";
import { fetchCats } from "./services/catsService";
import history from "./app/history";

const Content = lazy(() => import("./components/Content"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const dispatch = useDispatch();
  const { categories, cats, selectedCategory, page } = useSelector(
    (state: RootState) => state
  );

  useEffect(() => {
    (async function () {
      const response = await fetchCategories();
      dispatch(setCategories(response));
    })();
  }, [dispatch]);

  useEffect(() => {
    (async function () {
      const response = await fetchCats(LIMIT, page, selectedCategory);
      history.push(
        `/search?limit=${LIMIT}${
          !!selectedCategory ? `&category_ids=${selectedCategory}` : ""
        }${!!page ? `&pages=${page}` : ""}`
      );
      dispatch(page > 0 ? setCats(response) : resetCats(response));
    })();
  }, [selectedCategory, page, dispatch]);

  const handleLoadMoreClick = () => dispatch(setPage(page + 1));

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Header categories={categories} dispatch={dispatch} />
        <Router>
          <Route path={``} component={() => <Content cats={cats} />} />
        </Router>
        <button className="load-more" onClick={handleLoadMoreClick}>
          Load More
        </button>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
