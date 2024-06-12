import React from 'react'
import './Home.css';
import { useColors } from '../services/utils/colors';

export default function HomeApp() {

    // Colores globales
    const colors = useColors();
  return (
    <div className='contentHome' style={colors.backgroundStyle}>
        <div className='list'>
            <span>Alexander</span>
        </div>
    </div>
  )
}
