import React, {useState} from 'react';
import styles from './../src/styles/Home.module.css'
import {FormInput} from "../src/components/FormInput";
import {useDispatch} from "react-redux";
import {RegisterUser} from "../src/redux/cart/reducer";
import Link from 'next/link';

const Register = () => {
    const dispatch = useDispatch();
    const [data,setData] = useState({login:"",pass:""})
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(prev => {
            return {...data, [e.target.name]: e.target.value}
        })
    }
    const handleRegister = () =>{
            dispatch(RegisterUser(data))
    }
    return (
        <div className={styles.register}>
            <div className={styles.content}>
                <h1 className={styles.title}>Sign Up</h1>
                <div className={styles.flex}>
                    <FormInput className={styles.input} onChange={handleChange} placeholder='Login' name='login'/>
                    <FormInput className={styles.input} onChange={handleChange} placeholder='Password' name='pass' type='password'/>
                </div>
                <Link href='/'><a >
                    <button className={styles.button} onClick={
                        data.login.length > 1 && data.pass.length >1 ?() => handleRegister() :
                            (event) => {
                                event.preventDefault();
                            alert('Заполните поля');
                    }}>Continue</button>
                    <Link href="/"><a> <button className={styles.button}>Home Page</button></a></Link>
                </a></Link>
            </div>
        </div>
    );
};

export default Register;