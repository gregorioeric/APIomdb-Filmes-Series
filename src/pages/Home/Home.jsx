import { useContext, useState } from "react";
import "./style.css";
import context from "../../context/Context";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import Cards from "../../components/Cards/Cards";

function Home() {
  const { dataHome, setSearch } = useContext(context);
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleSearch = async () => {
    const req = await fetch(
      `https://www.omdbapi.com/?apikey=58eeaad1&s=${input}`
    );
    const res = await req.json();
    const data = res.Search;

    setSearch(data);
    setInput("");

    navigate(`/search/${data[0].Title}`);
  };

  if (!dataHome) {
    return <Loading />;
  }

  return (
    <main className="home">
      <div className="content content-home">
        <h1>Home</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Encontre Filmes, Series e Animações..."
            value={input}
            onChange={({ target }) => setInput(target.value)}
          />
          <button onChange={handleSearch}>Search</button>
        </div>
        <div className="content-cards">
          <Cards data={dataHome} />
        </div>
      </div>
    </main>
  );
}

export default Home;
