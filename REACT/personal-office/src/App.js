import "./App.css";
import { Login, Agenda, Todo, People } from "@microsoft/mgt-react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Mail from "./components/mail";
import Sharepoint from "./components/sharepoint";
function App() {
  return (
    <BrowserRouter>
      <div>
        <People />
        <Login />

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
          <Route path="/todo" element={<Todo />} />
          <Route path="/mail" element={<Mail />} />
          <Route path="/sharepoint" element={<Sharepoint />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
