import { MemoryRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import { Homepage } from "./pages/Homepage/Homepage";
import { Footer } from "./Shared/Footer/Footer";
import { Navbar } from "./Shared/Navbar/Navbar";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <MemoryRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/homepage" element={<Homepage />} />
          </Routes>
        </MemoryRouter>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
