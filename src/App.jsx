import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Mypage from "./pages/Mypage";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedRoute from "./Routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        {/* 유저전용 */}
        <Route element={<ProtectedRoute />}>
          <Route path="/mypage" element={<Mypage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
