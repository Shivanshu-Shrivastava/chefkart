import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import SelectedDish from "./Components/SelectedDish";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/dish/:id" element={<SelectedDish />} />
          <Route
            path="*"
            element={
              <h1 className="text-4xl text-center font-extrabold">404</h1>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
