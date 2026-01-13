import React from "react";
import "./Header.css"; // optional external styles

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="logo">📚 MyApp</div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <div className="actions">
        <button onClick={() => alert("Login clicked!")}>Login</button>
        <button onClick={() => alert("signup clicked!")}>SignUp</button>
      </div>
      
    </header>
  );
};

export default Header;
