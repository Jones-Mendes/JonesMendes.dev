import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";


function App() {
  return (
    <BrowserRouter basename="/JonesMendes.dev">
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
