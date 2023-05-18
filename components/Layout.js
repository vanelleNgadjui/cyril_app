import React from 'react';
import Link from 'next/link';

function Layout({ children, pageTitle }) {
  const handleLogout = () => {
    // Logique pour se déconnecter
    // ...
    // Rediriger vers la page de connexion
    window.location.href = '/login';
  };

  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo">
          {/* Insérer le logo ici */}
          <Link legacyBehavior href="/">
            <a>
              <img src="/logo.svg" alt="logo" />
            </a>
          </Link>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link legacyBehavior href="/dashboard">
                <a>
                  <img className="icon" src="/dashboard.svg" />
                  Dashboard
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/form">
                <a>
                  <img className="icon" src="/form.svg" />
                  Formulaires
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/bd">
                <a>
                  <img className="icon" src="/bd.svg" />
                  Base de données
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/send">
                <a>
                  <img className="icon" src="/send.svg" />
                  Envois et rappels
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/reglage">
                <a>
                  <img className="icon" src="/reglage.svg" />
                  Réglage
                </a>
              </Link>
            </li>
            {/* Ajouter d'autres liens de navigation ici */}
          </ul>
        </nav>
        <div className="logout">
          <Link legacyBehavior href="/login">
            <a onClick={handleLogout}>
              <img className="icon" src="/logout.svg" />
              Déconnexion
            </a>
          </Link>
        </div>
      </div>
      <div className="main">
        <div className="header">
          <div className="title">
            <h5>Hello Cyril,</h5>
            <h2>{pageTitle}</h2>
          </div>
          <div className="searchBar">
            <span className="searchIcon">
              <img src="/search.svg" alt="search" />
            </span>
            <input type="text" placeholder="Rechercher" className="searchInput" />
          </div>
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
