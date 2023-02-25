import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";
import Screen4 from "../screens/Screen4";
import Screen5 from "../screens/Screen5";


export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/Screen1">screen1</Link>
          <Link to="/Screen2">screen2</Link>
          <Link to="/Screen3">screen3</Link>
          <Link to="/Screen4">screen4</Link>
          <Link to="/Screen5">screen5</Link>
        </nav>
        <Routes>
          <Route path="Screen1" element={<Screen1 />} />
          <Route path="Screen2" element={<Screen2 />} />
          <Route path="Screen3" element={<Screen3 />} />
          <Route path="Screen4" element={<Screen4 />} />
          <Route path="Screen5" element={<Screen5 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
