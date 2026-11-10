import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navItems, profile } from "../../data/profile";
import { srOnly } from "../../styles/global.css";
import { cx } from "../../styles/cx";
import {
  brand,
  brandMark,
  btnSolid,
  header,
  headerRow,
  menuButton,
  nav,
  navContact,
  navLink,
  navLinkActive,
  navOpen,
} from "../../styles/styles.css";
import { CloseIcon, MenuIcon } from "./Icons";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={header}>
      <div className={headerRow}>
        <NavLink to="/" className={brand}>
          <span className={brandMark}>{profile.initials}</span>
          {profile.shortName}
        </NavLink>
        <button
          type="button"
          className={menuButton}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className={srOnly}>{open ? "Close menu" : "Open menu"}</span>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
        <nav id="site-nav" className={cx(nav, open && navOpen)}>
          {navItems.map((item) => (
            <NavLink
              key={item.link}
              to={item.link}
              className={({ isActive }) => cx(navLink, isActive && navLinkActive)}
            >
              {item.title}
            </NavLink>
          ))}
          <NavLink to="/contact" className={cx(btnSolid, navContact)}>
            Contact Me <span aria-hidden="true"> ☎</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
