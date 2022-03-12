import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Onboarding from "./pages/Onboarding";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        // specifies the routes to each page
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/onboarding" element={<Onboarding />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
