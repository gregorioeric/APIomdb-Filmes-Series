export async function fetchFilmesAcao() {
    const movies = [
        "batman", "superman", "constantine"
    ]

    const data = [];

    for (const movie of movies) {
        const req = await fetch(`https://www.omdbapi.com/?apikey=58eeaad1&t=${movie}`)
        const res = await req.json();

        data.push(res);
    }
    return data;
}