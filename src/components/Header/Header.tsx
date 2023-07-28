import React from 'react';
import './Header.scss';
import Button from "../Button/Button";
function Header() {

    return (
      <div className="header">
          <ul className="header-menu">
              <li className="header-menu-item">Мои проекты</li>
              <li className="header-menu-item">Опыт работы</li>
              <li className="header-menu-item">Навыки</li>
          </ul>
          <Button/>
      </div>
    );
}

export default Header;
