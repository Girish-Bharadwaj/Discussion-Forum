import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import PostDetails from "./PostDetails/PostDetails";
import UserProfile from "./UserProfile/UserProfile";
import Login from "./Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login/>}/> */}
          <Route path="/" element={<Home />} />
          <Route path="/postDetails" element={<PostDetails />} />
          <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
