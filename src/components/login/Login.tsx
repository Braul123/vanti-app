
import React, { useEffect, useState } from 'react';
import './Login.css';
import { useColors } from '../services/utils/colors';
import InputPrimary from '../UI/InputPrimary/InputPrimary';
import ButtonPrimary from '../UI/ButtonPrimary/ButtonPrimary';
import { useNavigate } from 'react-router-dom';
// Servicios
import fetchLogin from '../services/login';
import { getAcessToken } from '../services/utils/utils';
import { changeRouterExternal } from '../redux/routerDynamic';
import { useDispatch } from 'react-redux';


export default function LoginApp() {
    
    const navigate = useNavigate(); // Navegador
    const dispatch = useDispatch();

    useEffect(() => {        
        // Valida si hay usuario en sesión y redirige a home
        getAcessToken().then((data: any) => {
            if (data) {
                navigate('/home');
            }
        })
    }, [navigate])


    const urlImageVanti = "https://images.ctfassets.net/3brzg7q3bvg1/1yfEyrIprdCpuxflR9ME9E/2c32058c02102b3c2e39d3123585211f/vanti-logo.png?fm=webp&q=75&w=256";
    
    // Variables locales
    const [email, setEmail] = useState("alexchila@gmail.com");
    const [password, setPassword] = useState("qwerty");

    // Colores globales
    const colors = useColors();

    // Ejecuta el inicio de sesión
    const login = () => {
        fetchLogin({email, password}).then((data: any) => {
            localStorage.setItem('token', data);
            localStorage.setItem('userName', email);
            navigate('/home');
            dispatch(changeRouterExternal('sesion'))
        }).catch(err => {
            console.log('Ocurrio un error', err);
        })
    }

    // Validaciones básicas de un formulario de inicio de sesión
    const validateForm = () => {
        const validateEmail = email.includes("@");
        if (email.length>5 && validateEmail && password.length>4) return true;
    }

    return (
        <div className='content' style={colors.backgroundStyle}>
            <div className="cardLogin" style={{ ...colors.backgroundStyle, ...colors.borderForm }}>
                <span className='title' style={{ ...colors.colorText, }}>Bienvenido a </span>
                <img width={150} src={urlImageVanti} alt="" />
                <div className='form'>
                    <InputPrimary
                        key={"email"}
                        value={email}
                        setValue={setEmail}
                        onChange={setEmail}
                        placeholder="Ingresa tu correo electrónico"
                        type='email' />
                    <InputPrimary
                        key={"password"}
                        value={password}
                        onChange={setPassword}
                        setValue={setPassword}
                        placeholder="Ingresa tu correo electrónico"
                        type='password' />
                </div>
                <div className="contentItem">
                    <ButtonPrimary title="Iniciar sesión"
                        status={validateForm() ? 'enabled' : 'disabled'}
                        onClick={() => login()} />
                </div>
            </div>
            <div className='footer'>
                <p className='footerText' style={colors.colorText}>Aviso legal y terminos de uso. V1.0. Código fuente código abierto - Desarrollado por Braulio A. Chila R.</p>
            </div>
        </div>
    )
}
