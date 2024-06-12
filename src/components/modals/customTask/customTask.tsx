
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { FaEdit } from 'react-icons/fa';
import { useColors } from '../../services/utils/colors';
import InputPrimary from '../../UI/InputPrimary/InputPrimary';

import './customTask.css'
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../../state-app/taskSlice';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditTask(props: any) {

    const [taskLocal, setTaskLocal] = React.useState({});
    const dispatch = useDispatch();

    const colors = useColors(); // Obtiene los colores principales
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");

    useEffect(() => {
        console.log('LLEGA EL TASK', props);
        
        setTaskLocal(props.task)
        setTitle(props.task.title)
    }, [props.task]);

    useEffect(() => {
        // const newLocalTask: any = taskLocal;
        console.log('CAMBIANDO TASK,....', taskLocal);
        setTaskLocal({...taskLocal, title})
    
        // setTaskLocal(newLocalTask);
    }, [title])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // Evento para editar una tarea
    const handleEdit = () => {
        dispatch(editTask(taskLocal));
        handleClose();
    }

    const handleDeleteTask = () => {
        dispatch(deleteTask(taskLocal));
        handleClose();
    }

    return (
        <React.Fragment>
            <Button onClick={handleClickOpen}>
                <FaEdit className='icons' style={colors.colorText} size={18} /> &nbsp;
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Editar tarea"}</DialogTitle>
                <DialogContent>
                    <div>    
                        <span className='description'>Una vez edites o elimines la tarea ya no se podrán recuperar los datos.</span>
                    </div>

                    <div style={{ marginTop: '24px' }}>
                        <InputPrimary
                            key={"title"}
                            value={title}
                            setValue={setTitle}
                            onChange={setTitle}
                            placeholder="Ingresa el titulo de la tarea"
                            type='text'
                            style={{color: '#000', borderColor: '#000'}} />
                    </div>


                </DialogContent>
                <DialogActions style={{marginBottom: '12px'}}>
                    <Button variant="outlined" onClick={handleClose}>Cancelar</Button>
                    <Button variant="outlined" onClick={handleDeleteTask}>Eliminar</Button>
                    <Button variant="outlined" onClick={handleEdit}>Aceptar</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}