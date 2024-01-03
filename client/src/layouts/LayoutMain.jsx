import Nav from "../Nav";

function LayOutMain({ children }) {
  return (
    <div className="w-full h-screen flex">
      <Nav />
      {children}
    </div>
  );
}

export default LayOutMain;
