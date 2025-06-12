import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../../App.css';

const menuItems = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Case Study', link: '/case-study' },
  {
    name: 'Our Product',
    dropdown: true,
    children: [
      { name: 'Book', link: '/product/book' },
      { name: 'Tea', link: '/product/tea' },
      { name: 'Ring', link: '/product/ring' },
    ],
  },
  { name: 'Blog', link: '/blog' },
  { name: 'Contact Us', link: '/contact' },
];

const Nav = () => {
  const handleCollapse = () => {
    const bsCollapse = document.getElementById('mainNavbar');
    const collapseInstance = bootstrap.Collapse.getInstance(bsCollapse);
    if (collapseInstance) collapseInstance.hide();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm sticky-top px-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold text-primary" to="/">
          RahulBankar
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4 text-center">
            {menuItems.map((item, idx) =>
              item.dropdown ? (
                <li className="nav-item dropdown" key={idx}>
                  <span
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    {item.name}
                  </span>
                  <ul className="dropdown-menu text-center">
                    {item.children.map((child, cidx) => (
                      <li key={cidx}>
                        <NavLink
                          to={child.link}
                          onClick={handleCollapse}
                          className={({ isActive }) =>
                            isActive ? 'dropdown-item active' : 'dropdown-item'
                          }
                        >
                          {child.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li className="nav-item" key={idx}>
                  <NavLink
                    to={item.link}
                    onClick={handleCollapse}
                    className={({ isActive }) =>
                      isActive ? 'nav-link active' : 'nav-link'
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              )
            )}
          </ul>
          <div className="d-flex align-items-center flex-column flex-lg-row gap-3 ms-lg-auto mt-3 mt-lg-0">
            <div className="d-none d-lg-block">
              <small>📞 +91-XXXXXXXXXX</small>
            </div>
            <div className="d-flex gap-2">
              <a href="https://www.facebook.com/"><FaFacebook /></a>
              <a href="https://x.com/"><FaTwitter /></a>
              <a href="https://www.instagram.com/"><FaInstagram /></a>
              <a href="https://in.linkedin.com/"><FaLinkedin /></a>
            </div>
            <NavLink to="/contact" className="btn btn-primary btn-sm">GET QUOTE</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
