
import React, { useEffect, useState } from 'react';
import './TemplateTask.css'
import { useSelector } from 'react-redux';
import { log } from 'console';
import { colors } from '@mui/material';
import { useColors } from '../../services/utils/colors';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import EditTask from '../../modals/customTask/customTask';

interface Task {
    completed: boolean
    id: string
    title: string
    userId: number
}

export default function TemplateTask(props:any) {

    // Inicia el estado para la configiración de aspecto de la aplicacion 
    const isDarker = useSelector((state: any) => state.colorSystem.useColorScheme) === "dark";
    const colors = useColors(); // Obtiene los colores principales

    const [task, setTask] = useState(props.data);

    useEffect(() => {                
        setTask(props.data);
    }, [props.data])


    // Da el estilo de sombra al header dependiendo del aspecto
    const headerLine = {
        boxShadow: isDarker ? '0px 2px 4px rgba(255, 255, 255, 0.1)' : '0px 2px 4px rgba(0, 0, 0, 0.1)'
    }

    return (
        <div className='containerTemplate' style={headerLine}>
            <div className='description'>
                <span className='titleTask' style={colors.colorText}>{task.title}</span>
            </div>
            <div className='actions'>
                {/* <FaEdit className='icons' style={colors.colorText} size={18}/>
                <RiDeleteBin6Line className='icons' style={{color: 'red'}}  size={18}/> */}

                <EditTask task={task}/>
            </div>
        </div>
    )
}
