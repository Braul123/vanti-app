
import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import LoginApp from '../login/Login';
import HomeApp from '../home/Home';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeRouterExternal } from '../redux/routerDynamic';
import { getAcessToken } from '../services/utils/utils';

export default function RouterApp() {
  const dispatch = useDispatch();
  const dynamiNav = useSelector((state: any) => state.routerDynamic.action);

  const navigate = useNavigate();

  useEffect(() => {
    getAcessToken().then((data: any) => {
      if (!data) {
        navigate('/');
        dispatch(changeRouterExternal('/'));
      }
    })
  }, []);

  useEffect(() => {
    // Si el evento es para cerrar sesión desde un componente externo lo hace y cambia la accion del estado
    if (dynamiNav == 'logout') {
      navigate('/');
      dispatch(changeRouterExternal('/'));
    }
  }, [dynamiNav]);



  return (
    <Routes>
      <Route path='/' element={<LoginApp />}></Route>
      <Route path='/home' element={<HomeApp />}></Route>
    </Routes>
  )
}
