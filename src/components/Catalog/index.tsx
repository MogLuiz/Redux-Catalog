// Hooks
import { useSelector } from "react-redux";

const Catalog = () => {
  const catalog = useSelector((state) => state.email);

  console.log(catalog);

  return <h1>Catalog</h1>;
};

export default Catalog;
