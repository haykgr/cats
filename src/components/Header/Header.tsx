import { SyntheticEvent } from "react";
import { setPage, setSelectedCategory } from "../../app/actions";
import { AppDispatch } from "../../app/store";
import { ICategory } from "../../types/types";
import "./header.scss";
import NavbarButtons from "./NavbarButtons";

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
      <NavbarButtons
        categories={categories}
        handleCategoryClick={handleCategoryClick}
      />
    </nav>
  );
};

export default Header;
