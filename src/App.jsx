import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Startup from "./Pages/Startup";
import Investors from "./Pages/Investors";
import Private from "./Layout/Private";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Private />}>
          <Route path="/" element={<Home />} />
          <Route path="/startups" element={<Startup />} />
          <Route path="/investors" element={<Investors />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
