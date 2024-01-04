import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayOutMain from "./layouts/LayoutMain";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Reels from "./pages/Reels";
import Inbox from "./pages/Inbox";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LayOutMain>
              <Home />
            </LayOutMain>
          }
        />
        <Route
          path="/explore"
          element={
            <LayOutMain>
              <Explore />
            </LayOutMain>
          }
        />
        <Route
          path="/reels"
          element={
            <LayOutMain>
              <Reels />
            </LayOutMain>
          }
        />
        <Route
          path="/direct/inbox"
          element={
            <LayOutMain>
              <Inbox />
            </LayOutMain>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
