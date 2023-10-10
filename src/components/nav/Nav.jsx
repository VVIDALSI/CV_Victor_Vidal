import React from "react";
import stlNav from "../nav/Nav.module.css"
import {NavLink} from "react-router-dom"

const NavLinkMe = ({ to, children, ...props }) => {
    return (
        <NavLink {...props} to={to} className={({ isActive }) => (isActive ? stlNav.active : stlNav.disable)}>
            {children}
        </NavLink>
    );
};

export default function Nav(props) {
    return (
        <div className={stlNav.container}>
            <NavLinkMe to="/">Inicio</NavLinkMe>
            <NavLinkMe to="/Profile">Perfil Profesional</NavLinkMe>
            <NavLinkMe to="/Skills">Habilidades</NavLinkMe>
            <NavLinkMe to="/Portfolio">Portfolio WEB</NavLinkMe>
            <NavLinkMe to="/Experiences">Experiencias Laborales</NavLinkMe>
            <NavLinkMe to="/References">Referencias</NavLinkMe>
        </div>
    )
}