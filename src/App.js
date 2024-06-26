import "./App.css";
import "./themes.css";
import Layout from "./components/layout/Layout";
import { HashRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react"
function App() {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const root = document.documentElement;
    root.setAttribute("data-theme", theme ?? "github-dark");
  });

  return (
    <Router>
      <div className="App">
        <Layout />
        <Analytics/>
      </div>
    </Router>
  );
}

export default App;
