import { useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { resetCats, setCategories, setCats, setPage } from "./app/actions";
import { LIMIT } from "./app/constants";
import { AppDispatch } from "./app/store";
import { fetchCategories } from "./services/categoryService";
import { fetchCats } from "./services/catsService";
import { ICategory, ICat } from "./types/types";
import history from "./app/history";

interface IApp {
  categories: ICategory[];
  cats: ICat[];
  page: number;
  selectedCategory?: number;
  dispatch: AppDispatch;
}

function App({ categories, cats, page, selectedCategory, dispatch }: IApp) {
  const Content = lazy(() => import("./components/Content/Content"));
  const Header = lazy(() => import("./components/Header/Header"));
  const Footer = lazy(() => import("./components/Footer/Footer"));

  const handleLoadMoreClick = () => {
    dispatch(setPage(page + 1));
  };

  useEffect(() => {
    fetchCategories().then((response: ICategory[]) => {
      dispatch(setCategories(response));
    });
  }, [dispatch]);

  useEffect(() => {
    fetchCats(LIMIT, page, selectedCategory).then((response: ICat[]) => {
      history.push(
        `/search?limit=${LIMIT}${
          !!selectedCategory ? `&category_ids=${selectedCategory}` : ""
        }${!!page ? `&pages=${page}` : ""}`
      );
      dispatch(page > 0 ? setCats(response) : resetCats(response));
    });
  }, [selectedCategory, page, dispatch]);

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

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    ...ownProps,
    ...state,
  };
};

export default connect(mapStateToProps)(App);
