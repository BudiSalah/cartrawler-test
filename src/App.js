import "./App.scss";
import AppProvider from "./components/AppProvider";
import Home from "./pages/Home";
import Single from "./pages/Single";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/:id" element={<Single />} exact />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
