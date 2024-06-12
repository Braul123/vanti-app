
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import './InputPrimary.css'
import { useColors } from '../../services/utils/colors';
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

type props = {
    value: any;
    setValue: any;
    onChange: any;
    placeholder: string;
    disable?: boolean,
    type?: "text" | "password" | "email",
    style?: any
};

export default function InputPrimary(data: props) {
    const isDarker = useSelector((state: any) => state.colorSystem.useColorScheme) === "dark";
    const colorsCustom = useColors();
    const [showPassword, setShowPassword] = useState(data.type === 'password' ? false : true);

    const stylesInputCustom = {
        borderColor: isDarker ? '#41484D' : '#71787E',
    }

    // Evento para mostrar la contraseña
    const handleButtonPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className='contentInput'>
            <input
                value={data.value}
                className="inputPrimary"
                style={{ ...stylesInputCustom, ...colorsCustom.colorText, ...data.style }}
                disabled={data.disable}
                type={data.type === 'password' && showPassword ? 'text' : data.type}
                onChange={(event) => data.setValue(event.target.value)}
                placeholder={data.placeholder} />
            {
                data.type === "password" &&
                <div className='passwordIcon' onClick={() => handleButtonPassword()}>
                    {showPassword ?
                        <LuEye size={18} style={colorsCustom.colorText} /> :
                        <LuEyeOff size={18} style={colorsCustom.colorText} />
                    }
                </div>

            }
        </div>

    )
}
