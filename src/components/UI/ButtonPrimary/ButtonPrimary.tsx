
import React from 'react';
import './ButtonPrimary.css'
import { useColors } from '../../services/utils/colors';

export default function ButtonPrimary() {

    const colors = useColors();

  return (
    <button className='button' style={colors.enabledMode}>
        <span className='titleButton'>Iniciar sesion</span>
    </button>
  )
}
