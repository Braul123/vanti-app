import { useSelector } from "react-redux";


// Colores primarios
export const colorsMain = {
    brand: {
        backgroundPrimary: '#f6cc5c',
        backgroudSecondary: '#113455',
        textEnabledDarkMode: '#462B00',
        textEnabledLigthMode: '#FFFFFF'
    },
    system: {
        primaryColorTextDarkMode: '#C5C7C8',
        primaryColorTextLigthMode: '#191C1D',
        secondaryColorTextDarkMode: '#C1C7CE',
        secondaryColorTextLigthMode: '#41484D',
        darker: '#1c2024',
        darkerScondary: '#1C1B1F',
        lighter: '#FFFBFE',
        disabledBackgroundDarkMode: '#E6E1E51F',
        disabledBackgroundLigthMode: '#1C1B1F1F',
        textDisableLightMode: '#252A3C99',
    },
}

// Coloreds priemarios
export const colorsMainAll = () => {
    return colorsMain
}

// Obtiene el modo claro/oscuro del sistema y define el color de los textos y estilos generales
export const useColors =() => {
    // const isDarkMode = true;

    const isDarkMode = useSelector((state: any) => state.colorSystem.useColorScheme) === "dark";


    return {
        // Color primario del texto
        colorText: {
            color: isDarkMode
                ? colorsMain.system.primaryColorTextDarkMode
                : colorsMain.system.primaryColorTextLigthMode,
        },
        // Color secundario para los textos
        colorTextSecondary: {
            color: isDarkMode
                ? colorsMain.system.secondaryColorTextDarkMode
                : colorsMain.system.secondaryColorTextLigthMode,
        },
        // Color de fondo de un contenedor
        backgroundStyle: {
            backgroundColor: isDarkMode ? colorsMain.system.darker : colorsMain.system.lighter,
        },
        backgroundStyleSecondary: {
            backgroundColor: isDarkMode ? colorsMain.system.darker : colorsMain.system.lighter,
        },
        // DISABLE STYLES
        disableButton: {
            backgroundColor: isDarkMode ? colorsMain.system.darker : colorsMain.system.lighter,
        },
        disabledDarkMode: {
            backgroundColor: colorsMain.system.disabledBackgroundDarkMode,    
        },
        textDisabledDarkMode: {
            color: colorsMain.system.primaryColorTextDarkMode
        }, 
        disableLightMode: {
            backgroundColor: colorsMain.system.disabledBackgroundLigthMode
        },
        textDisableLightMode: {
            color: colorsMain.system.textDisableLightMode
        },
        // ENABLED STYLES
        enabledMode: {
            backgroundColor: colorsMain.brand.backgroundPrimary
        },
        textEnabledDarkMode: {
            color: colorsMain.brand.textEnabledDarkMode,
        },
        textEnabledLigthMode: {
            color: colorsMain.brand.textEnabledLigthMode
        },

        // BORDE DE CARD
        borderForm : {
            border: isDarkMode ? '1px solid #41484D': 0,
        }
    }
}