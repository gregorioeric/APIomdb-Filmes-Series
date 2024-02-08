import { useEffect, useState } from "react";
import context from "./Context";
import { serviceHome } from "../services/Home/serviceHome";

const Provider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [dataHome, setDataHome] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await serviceHome();

      setDataHome(data);
    };
    fetchApi();
  }, []);

  const contextValue = {
    search,
    dataHome,
    setSearch,
  };
  return <context.Provider value={contextValue}>{children}</context.Provider>;
};

export default Provider;
