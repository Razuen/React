import React from "react";
import Logo from "../../components/Logo/Logo";
import "./Header.scss";

function Header({ text }) {
  return (
    <header className="header">
      <Logo />
      <h3>
        Watch Your Favorite Movies on the Big Screen. Just You and Your Loved
        Ones!
      </h3>
    </header>
  );
}

export default Header;
