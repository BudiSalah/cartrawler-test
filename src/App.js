import "./App.scss";
import AppProvider from "./components/AppProvider";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Error from "./pages/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/:id" element={<Single />} exact />
          <Route path="/404" element={<Error />} exact />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
