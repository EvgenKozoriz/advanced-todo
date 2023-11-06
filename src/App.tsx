import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu/Menu";
import UpcomingTasks from "./Pages/Upcoming-tasks/UpcomingTasks";
import TodayTasks from "./Pages/Today-tasks/TodayTasks";
import Calendar from "./Pages/Calendar/Calendar";
import StickyWall from "./Pages/Sticky-wall/StickyWall";
import ErrorPage from "./Pages/Error-page/ErrorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <Menu />
          <div className="main">
            <Routes>
              <Route path="/">
                <Route path="upcoming" element={<UpcomingTasks />} />
                <Route path="today" element={<TodayTasks />} />
                <Route path="calendar" element={<Calendar />} />
                <Route path="sticky-wall" element={<StickyWall />} />
              </Route>
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
