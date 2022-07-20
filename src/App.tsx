import { useState } from 'react';
import ThemeContext from './context/ThemeContext';
import Navbar from './components/Header/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import MyOrders from './views/MyOrders/MyOrders';
import MyCart from './views/MyCart/MyCart';
import SubNavbar from './components/Header/SubNavbar/SubNavbar';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme: toggleTheme }}>
      <Router>
        <Navbar />
        <SubNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meus-pedidos" element={<MyOrders />} />
          <Route path="/meu-carrinho" element={<MyCart />} />
          <Route path="/area-cachorros" element={<MyCart />} />
          <Route path="/area-gatos" element={<MyCart />} />
          <Route path="/outros-pets" element={<MyCart />} />
          <Route path="/servicos" element={<MyCart />} />
          <Route path="/banho-tosa" element={<MyCart />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
