import { useContext } from "react";
import "./search.css";
import context from "../../context/Context";
import Cards from "../../components/Cards/Cards";

function Search() {
  const { search } = useContext(context);

  return (
    <section className="container">
      <Cards data={search} />
    </section>
  );
}

export default Search;
