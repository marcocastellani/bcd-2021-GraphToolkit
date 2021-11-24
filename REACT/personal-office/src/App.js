import "./App.css";
import { Login, Agenda, Todo, People } from "@microsoft/mgt-react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Mail from "./components/mail";
import Sharepoint from "./components/sharepoint";
function App() {
  return (
    <BrowserRouter>
      <div>

        <div class="testata">
          <h1 class="top_title">Graph Toolkit: React</h1>
          <People />
          <Login />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Agenda</Link>
            </li>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
            <li>
              <Link to="/mail">Mail</Link>
            </li>
            <li>
              <Link to="/sharepoint">Sharepoint(template)</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Agenda />} />
          <Route path="/todo" element={
          <div class="container">
            <Todo />
          </div>
          } />
          <Route path="/mail" element={
          <div class="container">
            <Mail />
          </div>} />
          <Route path="/sharepoint" element={
          <div class="container">
            <Sharepoint />
          </div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
