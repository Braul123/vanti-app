
import React, { useEffect, useState } from 'react';
import './Login.css';
import { colorsMain, useColors } from '../services/utils/colors';
import { useSelector, useDispatch } from 'react-redux';
import { changeAspect } from '../redux/colorSystemSlice';
import InputPrimary from '../UI/InputPrimary/InputPrimary';
import ButtonPrimary from '../UI/ButtonPrimary/ButtonPrimary';
import { log } from 'console';

export default function LoginApp() {
    const dispatch = useDispatch();
    const isDarker = useSelector((state: any) => state.colorSystem.useColorScheme) === "dark";

    console.log('ESTE ES EL MODO DESDE LOGGGG', isDarker)

    // Variaables locales
    const [email, setEmail] = useState("");

    const colors = useColors();
    

    return (
        <div className='content' style={colors.backgroundStyle}>
            {/* <span className='title'>Alex</span> */}
            <div className="cardLogin" style={{...colors.backgroundStyle, ...colors.borderForm}}>
                <span className='title' style={{...colors.colorText, }}>Bienvenido a </span>
                <img width={150} src="https://images.ctfassets.net/3brzg7q3bvg1/1yfEyrIprdCpuxflR9ME9E/2c32058c02102b3c2e39d3123585211f/vanti-logo.png?fm=webp&q=75&w=256" alt="" />

                <div className='form'>
                    {/* <div className="contentItem"> */}
                        <InputPrimary
                            value={email}
                            setValue={setEmail}
                            onChange={setEmail}
                            placeholder="Ingresa tu correo electrónico"
                            type='email'/>
                    {/* </div> */}
                    {/* <div className="contentItem"> */}
                        <InputPrimary
                            value={email}
                            setValue={setEmail}
                            onChange={setEmail}
                            placeholder="Ingresa tu correo electrónico"
                            type='password'/>
                    {/* </div> */}
                </div>
                <div className="contentItem">
                    <ButtonPrimary/>
                </div>
            </div>
            <div className='footer'>
                <p className='footerText' style={colors.colorText}>Aviso legal y terminos de uso. V1.0. Código fuente código abierto - Desarrollado por Braulio A. Chila R.</p>
            </div>

        </div>
    )
}
