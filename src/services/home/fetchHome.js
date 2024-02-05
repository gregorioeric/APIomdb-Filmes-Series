export async function fetchAction() {
    const names = ["godzilla", "avengers", "spider-man"];
    const req = names.map(name => fetch(`https://www.omdbapi.com/?apikey=58eeaad1&t=${name}`));
    const res = await Promise.all(req);

    const data = await Promise.all(res.map(e => e.json()));

    return data;
}

export async function fetchHorror() {
    const names = ["a-nightmare-on-elm-street", "friday-the-13th", "saw"];
    const req = names.map(name => fetch(`https://www.omdbapi.com/?apikey=58eeaad1&t=${name}`));
    const res = await Promise.all(req);

    const data = await Promise.all(res.map(e => e.json()));

    return data;
}

export async function fetchAdventure() {
    const names = ["pirates", "indiana-jones", "transformers"];
    const req = names.map(name => fetch(`https://www.omdbapi.com/?apikey=58eeaad1&t=${name}`))
    const res = await Promise.all(req);

    const data = await Promise.all(res.map(e => e.json()));

    return data;
}
