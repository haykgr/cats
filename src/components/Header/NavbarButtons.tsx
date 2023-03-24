import { SyntheticEvent } from "react";
import { ICategory } from "../../types/types";

const NavbarButtons = ({
  categories,
  handleCategoryClick,
}: {
  categories: ICategory[];
  handleCategoryClick: (event: SyntheticEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <>
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
    </>
  );
};

export default NavbarButtons;
