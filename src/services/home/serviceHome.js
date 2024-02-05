import { dataHome } from "../data/dataHome";
import { fetchAdventure, fetchHorror, fetchAction } from "./Home/fetchHome";

export const serviceHome = async () => {
    const dataAction = await fetchAction();
    const dataAdventure = await fetchAdventure();
    const dataHorror = await fetchHorror();
    dataHome[0].movies.push(...dataAction);
    dataHome[1].movies.push(...dataAdventure);
    dataHome[2].movies.push(...dataHorror);
    return dataHome;
}