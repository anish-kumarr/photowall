import React from "react";
import AddPhoto from "./AddPhoto";
import Home from "./Home";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import PhotoWall from "./PhotoWall";
import Single from "./Single";
// import { removePost } from "../redux/action";
// import Title from "./Title";

// class Main extends Component {
//   constructor() {
//     super();
//   }

//   render() {
function Main(props) {
  const navigate = useNavigate();

  return (
    <div>
      <h1>
        <Link to="/">Photowall</Link>
      </h1>
      <Routes>
        <Route path="/" element={<PhotoWall {...props} />} />
        <Route
          path="/AddPhoto"
          element={<AddPhoto onNavigate={navigate} {...props} />}
        />

        <Route path="/single/:id" element={<Single {...props} />} />
      </Routes>
    </div>
  );
}

export default Main;
