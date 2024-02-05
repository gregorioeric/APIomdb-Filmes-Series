import context from "./Context";

const Provider = ({ children }) => {
  const contextValue = {};
  return <context.Provider value={contextValue}>{children}</context.Provider>;
};

export default Provider;
