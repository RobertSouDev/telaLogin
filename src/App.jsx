import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import CardLogin from "./components/CardLogin";

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardLogin/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/RobertSouDev/telaLogin.git
git push -u origin main