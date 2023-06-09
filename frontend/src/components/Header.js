import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header({ userData, onSignOut }) {
  const { pathname } = useLocation();
  const isSignUpPage = pathname === "/signup";
  const isMainPage = pathname === "/";

  return (
    <>
      {isMainPage && (
        <div className="hamburger">
          <input id="hamburger__toggle" type="checkbox" />
          <label className="hamburger__btn" htmlFor="hamburger__toggle">
            <span></span>
          </label>

          <div className="hamburger__box">
            <p className="header__user-data">{userData.email}</p>
            <button onClick={onSignOut} className="header__exit">
              Выйти
            </button>
          </div>
        </div>
      )}
      <header className="header">
        <div className="header__container">
          <div
            className={`header__logo ${
              isMainPage ? "" : "header__logo_no-main"
            }`}
          />
          {!isMainPage ? (
            <Link
              to={isSignUpPage ? "/signin" : "/signup"}
              className="header__link"
            >
              {isSignUpPage ? "Войти" : "Регистрация"}
            </Link>
          ) : (
            <nav className="header__nav">
              <p className="header__user-data">{userData.email}</p>
              <button onClick={onSignOut} className="header__exit">
                Выйти
              </button>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
