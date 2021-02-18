import { useParams, useRouteMatch } from "react-router-dom";

const Item = () => {
  const { name } = useParams();
  console.log("Item useRouteMatch: ", useRouteMatch());
  return (
    <div className="container-inner">
      <h3>{name}</h3>
    </div>
  );
};

export default Item;
