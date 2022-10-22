import "./style";
import Blog from "./pages/Blog";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Router } from "preact-router";

export default function App() {

  return (
    <div>
      <Router>
        <Blog path="/" />
        <Signup path="signup" />
        <Login path="/login" />
      </Router>
    </div>
  );
}
