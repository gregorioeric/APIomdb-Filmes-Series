import "./cards.css";

function Cards({ data }) {
  return (
    <>
      <div className="content content-cards">
        {data.map((e, i) => (
          <div key={i}>
            <h2>{e.title}</h2>
            <div className="card-row">
              {e.movies.map((movie, index) => (
                <div key={index} className="cards">
                  <picture>
                    <img src={movie.Poster} alt="" />
                  </picture>
                  <h2>{movie.Title}</h2>
                  <p>
                    <strong>Released: </strong>
                    {movie.Released}
                  </p>
                  {movie.Plot && (
                    <div className="plot-content">
                      <p>
                        <strong>Description:</strong>
                      </p>
                      <p className="plot">{movie.Plot}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
