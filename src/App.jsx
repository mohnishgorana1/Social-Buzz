import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, AuthPage } from "./pages";

function App() {
  return (
    <main id="app-layout" className="mx-12 my-8">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
