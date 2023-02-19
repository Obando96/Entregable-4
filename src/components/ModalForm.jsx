import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import "./styles/ModalForm.css"

const defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: "",
};

const ModalForm = ({ isShowModal, handleClickShowModal, createUser, updatingUser,updateUser, setUpdatingUser }) => {

    const { register, handleSubmit, reset } = useForm()

    const submit = (data) => {
        if(updatingUser){
            updateUser(data, updatingUser.id)
        }else{
            createUser(data);
        }
        
        reset(defaultValues);
    };

    const handleClickClose = () => {
        handleClickShowModal();
        reset(defaultValues)
        setUpdatingUser();
    }

    useEffect(() => {
        if(updatingUser){
            reset(updatingUser);
        }
    }, [updatingUser])
    

    return (
        <section className={`modalForm ${isShowModal ? "activeForm" : ""}`}>
            <form onSubmit={handleSubmit(submit)} className='modalForm_form'>
                <h3 className='modalForm_title'>{updatingUser ? "Edit User" : "New User"}</h3>
                <i onClick={handleClickClose} className='modalForm_x bx bx-x'></i>
                <div className='modalForm_div'>
                    <label className='modalForm_label' htmlFor="">Name</label>
                    <input className='modalForm_input' type="text" {...register("first_name")} />
                </div>
                <div className='modalForm_div'>
                    <label className='modalForm_label' htmlFor="">Last Name</label>
                    <input className='modalForm_input' type="text" {...register("last_name")} />
                </div>
                <div className='modalForm_div'>
                    <label className='modalForm_label' htmlFor="">Email</label>
                    <input className='modalForm_input' type="email" {...register("email")} />
                </div>
                <div className='modalForm_div'>
                    <label className='modalForm_label' htmlFor="">Paswword</label>
                    <input className='modalForm_input' type="password" {...register("password")} />
                </div>
                <div className='modalForm_div'>
                    <label className='modalForm_label' htmlFor="">Birthday</label>
                    <input className='modalForm_input' type="date" {...register("birthday")} />
                </div>
                <button className='modalForm_btn'>{updatingUser ? "Save changes" : "Add new user"}</button>
            </form>
        </section>
    )
}

export default ModalForm