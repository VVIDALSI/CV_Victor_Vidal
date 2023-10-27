import React, { useState } from "react";
import stlNav from "../nav/Nav.module.css";
import { NavLink } from "react-router-dom";
import i18n from '../../i18n';
import { withNamespaces } from 'react-i18next';

const NavLinkMe = ({ to, children, ...props }) => {
  return (
    <NavLink {...props} to={to} className={({ isActive }) => (isActive ? stlNav.active : stlNav.disable)}>
      {children}
    </NavLink>
  );
};

function Nav({ t }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Agrega un manejador de eventos para cerrar el menú cuando se hace clic en cualquier parte de la ventana
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }


  return (
    <div className={stlNav.container}>
      <button className={stlNav.mobileMenuButton} onClick={toggleMobileMenu}>
        ☰
      </button>
      <div className={isMobileMenuOpen ? stlNav.mobileMenuOpen : stlNav.mobileMenuClosed} onClick={closeMobileMenu}>
        <NavLinkMe to="/">{t('Inicio')}</NavLinkMe>
        <NavLinkMe to="/Profile">{t('Perfil Profesional')}</NavLinkMe>
        <NavLinkMe to="/Skills">{t('Habilidades')}</NavLinkMe>
        <NavLinkMe to="/Portfolio">{t('Portfolio WEB')}</NavLinkMe>
        <NavLinkMe to="/Experiences">{t('Experiencias Laborales')}</NavLinkMe>
        <NavLinkMe to="/References">{t('Referencias')}</NavLinkMe>
        <div className={stlNav.btnLanguage}>
          <button className={stlNav.btnEs} onClick={() => changeLanguage('es')}>{t('es')}</button>
          <button className={stlNav.btnEn} onClick={() => changeLanguage('en')}>{t('en')}</button>
        </div>
      </div>
    </div>
  );
}

export default withNamespaces()(Nav);