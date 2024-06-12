import React, { useEffect, useState } from 'react'
import './Home.css';
import { colorsMain, useColors } from '../services/utils/colors';
import { fetchGetTask } from '../services/data-service';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlinePushPin } from "react-icons/md";
import { selectFilter } from '../state-app/filterData';
import { setData } from '../state-app/taskSlice';
import TemplateTask from '../UI/TemplateTask/TemplateTask';

export default function HomeApp() {
  const dispatch = useDispatch();

  // Inicia el estado para la configiración de aspecto de la aplicacion 
  const isDarker = useSelector((state: any) => state.colorSystem.useColorScheme) === "dark";
  const colors = useColors(); // Obtiene los colores principales

  // Define el borde de los botones
  const borderActions = {
    borderColor: isDarker ? "rgb(223, 226, 231, 0.1)" : "rgb(223, 226, 231, 1)"
  }

  // Obtiene los filtros para la lista de tareas
  const filters = useSelector((state: any) => state.filterData.filters);
  const [localFilters, setLocalFilters] = useState([]);

  useEffect(() => {
    setLocalFilters(filters);
    }, [filters]);

  // Obtiene las tareas del estado de la aplicación
  const dataTask = useSelector((state: any) => state.dataTask.data);
  const [localTask, setLocalTask] = useState([]);

  useEffect(() => { 
    console.log('CAMBIAN LAS TAREAS', dataTask);
       
    setLocalTask(dataTask);
  }, [dataTask]);

  useEffect(() => {
    getAllTask();
  }, [])

  // Obtiene las tareas existentes
  const getAllTask = () => {
    fetchGetTask().then((data: any) => {
      console.log('RESULTADO', data);
      dispatch(setData(data));
    }, err => {
      console.error(err);
    })
  }

  // Cambia el filtro
  const handleFilter = (id: string) => {
    dispatch(selectFilter({ id }));
  }



  return (
    <div className='contentHome' style={colors.backgroundStyle}>
      <div className='container'>
        <div className='header'>
          <strong className='titleComponent' style={colors.colorText}>Tus tareas</strong>

          <div className='tabs'>
            {
              localFilters.map((data: any) => {
                return (
                  <button key={data.id} className='buttonTab' style={borderActions} onClick={() => handleFilter(data.id)}>
                    <span className='titleTab' style={colors.colorText}>{data.name}</span>
                    {data.select ? <MdOutlinePushPin size={15} color={colorsMain.brand.backgroundPrimary} /> : null}
                  </button>
                )
              })
            }
          </div>
        </div>
        <div className='list'>
          {
            localTask.map((task: any) => {              
              return (
                <TemplateTask key={task.id} data={task} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
