import { useState } from 'react';
import ThemeContext from './context/ThemeContext';
import Navbar from './components/Header/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import MyOrders from './views/MyOrders';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme: toggleTheme }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meus-pedidos" element={<MyOrders />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
