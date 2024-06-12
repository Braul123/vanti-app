import React, { useEffect, useState } from 'react';
import './Header.css';
import { MdLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";

// Sservicios
import { logOutApp } from '../../services/login';
import { useDispatch, useSelector } from 'react-redux';
import { changeAspect } from '../../redux/colorSystemSlice';
import { changeRouterExternal } from '../../redux/routerDynamic';
import { useColors, colorsMain } from '../../services/utils/colors';

export default function Header(data: any) {
    // Inicia el estado para la configiración de aspecto de la aplicacion 
    const dispatch = useDispatch();
    const isDarker = useSelector((state: any) => state.colorSystem.useColorScheme) === "dark";
    const actualDynamicNav = useSelector((state: any) => state.routerDynamic.action);

    useEffect(() => {
        // Si está fuera del login activa el boton de cerrar sesion
        if (window.location.pathname !== '/') {
            dispatch(changeRouterExternal('sesion'));
        }
    }, []);

    const colors = useColors(); // Obtiene los colores principales

    // Cambia el aspecto de la aplicación
    const handleMode = (mode: string) => {
        dispatch(changeAspect(mode));
    }

    // Define el borde de los botones
   const borderActions = {
        borderColor: isDarker ? "rgb(223, 226, 231, 0.1)" : "rgb(223, 226, 231, 1)"
    }
    // Si el botón de modo claro está activado aplica el siguiente estilo 
    const activeButtonLigth = {
        button : {
            borderColor: colorsMain.brand.backgroundPrimary,
            backgroundColor: "rgba(246, 204, 92, 0.11)",
        },
        text: {
            color: colorsMain.brand.backgroundPrimary
        }
    }
    // Si el botón de modo oscuro está activado aplica el siguiente estilo 
    const activeButtonDark = {
        button : {
            borderLeft: `1px solid ${colorsMain.brand.backgroundPrimary}`,
            borderColor: isDarker ? colorsMain.brand.backgroundPrimary : "rgb(223, 226, 231, 0.1)",
            backgroundColor: isDarker ? "rgba(246, 204, 92, 0.11)" : '',
        },
        text: {
            color: isDarker ? colorsMain.brand.backgroundPrimary : colorsMain.system.primaryColorTextDarkMode
        }
    }
    // Da el estilo de sombra al header dependiendo del aspecto
    const headerLine = {
        boxShadow: isDarker ? '0px 2px 4px rgba(255, 255, 255, 0.1)' : '0px 2px 4px rgba(0, 0, 0, 0.1)'
    }

    // Cierra la sesion
    const logOut = () => {
        logOutApp();
        dispatch(changeRouterExternal('logout'))
    }

    return (
        <div className='headerSection' style={{ ...colors.backgroundStyle, ...data.styles, ...headerLine }}>
            <div className='customSection'>
                {
                    actualDynamicNav !== '/' &&
                    <div className='logout' onClick={() => logOut()}>
                        <FaArrowLeft size={16} style={!isDarker ? activeButtonLigth.text : colors.colorText}/>
                        <span className='titleMode' style={!isDarker ? activeButtonLigth.text : colors.colorText}>Cerrar sesión</span>

                    </div>
                }
            </div>
            <div className='actions'>
                <div 
                style={!isDarker ? activeButtonLigth.button : borderActions}
                className="mode ligth" onClick={() => handleMode('ligth')}>
                    <MdLightMode size={20} style={!isDarker ? activeButtonLigth.text : colors.colorText}/>
                    <span className='titleMode' style={!isDarker ? activeButtonLigth.text : colors.colorText}>Claro</span>
                </div>
                <div 
                style={isDarker ? activeButtonDark.button : borderActions}
                className={`mode dark`} onClick={() => handleMode('dark')}>
                    <MdOutlineDarkMode size={20} style={isDarker ? activeButtonDark.text : colors.colorText}/>
                    <span className='titleMode' style={isDarker ? activeButtonDark.text : colors.colorText}>Oscuro</span>
                </div>
            </div>
        </div>
    )
}
