import React from 'react';
import './Header.scss';
function Header() {
    return (
      <div className="header">
          <ul className="header-menu">
              <li className="header-menu-item">Мои проекты</li>
              <li className="header-menu-item">Опыт работы</li>
              <li className="header-menu-item">Навыки</li>
          </ul>
          <button className="header-btn">Связаться</button>
      </div>
    );
}

export default Header;
