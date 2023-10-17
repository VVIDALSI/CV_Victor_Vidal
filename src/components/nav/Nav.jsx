import React, { useState } from "react";
import stlNav from "../nav/Nav.module.css"
import { NavLink } from "react-router-dom"

const NavLinkMe = ({ to, children, ...props }) => {
    return (
        <NavLink {...props} to={to} className={({ isActive }) => (isActive ? stlNav.active : stlNav.disable)}>
            {children}
        </NavLink>
    );
};

export default function Nav(props) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <div className={stlNav.container}>
            <button className={stlNav.mobileMenuButton} onClick={toggleMobileMenu}>
                ☰
            </button>
            <div className={isMobileMenuOpen ? stlNav.mobileMenuOpen : stlNav.mobileMenuClosed}>
                <NavLinkMe to="/">Inicio</NavLinkMe>
                <NavLinkMe to="/Profile">Perfil Profesional</NavLinkMe>
                <NavLinkMe to="/Skills">Habilidades</NavLinkMe>
                <NavLinkMe to="/Portfolio">Portfolio WEB</NavLinkMe>
                <NavLinkMe to="/Experiences">Experiencias Laborales</NavLinkMe>
                <NavLinkMe to="/References">Referencias</NavLinkMe>
            </div>
        </div>
    )
}