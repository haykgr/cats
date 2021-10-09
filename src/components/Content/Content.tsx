import { lazy, Suspense } from "react";
import { ICat } from "../../types/types";
import "./content.scss";

interface IProps {
  cats: ICat[];
}

const Content = ({ cats }: IProps) => {
  const Image = lazy(() => import("../Image/Image"));

  return (
    <div className="cats-images">
      {cats.map((cat: ICat) => (
        <div className="cats-images-image-container" key={cat.id}>
          <Suspense fallback={<div>Loading...</div>}>
            <Image src={cat.url} alt={cat.id} />
          </Suspense>
        </div>
      ))}
    </div>
  );
};

export default Content;
