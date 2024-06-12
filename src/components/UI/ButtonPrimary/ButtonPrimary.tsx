
import React from 'react';
import './ButtonPrimary.css'
import { useColors } from '../../services/utils/colors';
import { useSelector } from 'react-redux';

interface props {
    onClick: any,
    title: string,
    status: 'enabled' | 'disabled',
    progress?: boolean,
    style?: any
}

export default function ButtonPrimary(data: props) {
    // Customo colors
    const isDarkMode = useSelector((state: any) => state.colorSystem.useColorScheme) === "dark";
    const colorsCustom = useColors();

    return (
        <button
            style={data.status === "enabled" && !data.progress ?
                colorsCustom.enabledMode :
                isDarkMode ? colorsCustom.disabledDarkMode :
                    colorsCustom.disableLightMode
            }
            className='button'
            onClick={data.status === 'enabled' ? data.onClick : null}>
            <span className='titleButton'
            style={
                isDarkMode && data.status === "enabled" ? colorsCustom.textEnabledDarkMode :
                isDarkMode && data.status === "disabled" ? colorsCustom.textDisabledDarkMode :
                !isDarkMode && data.status === "enabled" ? colorsCustom.textEnabledLigthMode : colorsCustom.textDisableLightMode
              }
            >{data.title}</span>
        </button>
    )
}
