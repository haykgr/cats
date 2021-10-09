import { SyntheticEvent } from "hoist-non-react-statics/node_modules/@types/react";
import { setPage, setSelectedCategory } from "../../app/actions";
import { AppDispatch } from "../../app/store";
import { ICategory } from "../../types/types";
import "./header.scss";

interface IProps {
  categories: ICategory[];
  dispatch: AppDispatch;
}

const Header = ({ categories, dispatch }: IProps) => {
  const handleCategoryClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.dataset.key;
    dispatch(setPage(0));
    dispatch(setSelectedCategory(Number(id)));
  };

  return (
    <nav className="header-nav">
      {categories.map((category: ICategory) => (
        <button
          key={category.id}
          data-key={category.id}
          className="header-nav-item"
          onClick={handleCategoryClick}
        >
          {category.name}
        </button>
      ))}
    </nav>
  );
};

export default Header;
