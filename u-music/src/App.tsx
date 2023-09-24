import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import SearchScreen from "./components/SearchScreen";
import Library from "./pages/Library";

// function App() {
//   const [isModalOpen, setModalOpen] = useState(false);

//   const handleOpenModal = () => {
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };
//   return (
//     <Router>
//       <div className="app">
//         <Header />
//         <div className="content">
//           <Navigation />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/explore" element={<Explore />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/search" element={<SearchScreen />} />

//             <Route path="/home" element={<Home />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Navigation />
          <Routes>
            {/* / 경로에 Home 컴포넌트 연결 */}
            <Route path="/" element={<Home />} />

            {/* /home 경로에도 Home 컴포넌트 연결 */}
            <Route path="/home" element={<Home />} />
            <Route path="/Library" element={<Library />} />
            <Route path="/search" element={<SearchScreen />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
