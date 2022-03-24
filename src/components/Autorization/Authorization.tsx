import React, {useContext, useEffect, useState} from 'react';
import styles from './Authorization.module.scss'
import {FormInput} from "../FormInput";
import Link from 'next/dist/client/link';
import {DataContext} from "../../helpers/context";
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {Authorize, UnAuthorize} from './../../redux/cart/reducer';

const Authorization = () => {
    // @ts-ignore
    const Access = useSelector(state => state.cart.authorize);
    const [data, setData] = useState({mail: "", pass: ""})
    const [checkLogin, setCheckLogin] = useState<boolean>(false);
    // @ts-ignore
    const UsersID = useSelector(state => state.cart.users);
    const [checkPass, setCheckPass] = useState(false);
    const Users = useContext(DataContext);
    const dispatch = useDispatch();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(prev => {
            return {...data, [e.target.name]: e.target.value}
        })
    }
    useEffect(() => {

        if (data.mail.length > 0) {
            setCheckLogin(true);

        } else {
            setCheckLogin(false);
        }

        if (data.pass.length > 0) {
            setCheckPass(true);
        } else {
            setCheckPass(false);
        }

    }, [data])
    useEffect(() => {
        if (checkPass && checkLogin) {
            const userAccess =
                Users.find((elem: any) => elem.email === data.mail && elem.name === data.pass);
            const RegisterUsersAccess = UsersID.find((elem: any) => elem.login === data.mail && elem.pass === data.pass);

            if (typeof userAccess !== 'undefined' || typeof RegisterUsersAccess !== 'undefined') {
                dispatch(Authorize())
            } else {
                dispatch(UnAuthorize())
            }
        }
    })
    const checkValidate = () =>{
        data.mail.length > 0 &&
        data.pass.length > 0? alert('Неправильный логин или пароль') : null
    }
    return (
        <>
            <div className={styles.autorization}>
                <div className={styles.content}>
                    <h1>Authorization</h1>

                    <FormInput onChange={handleChange} placeholder='Login' name='mail'/>
                    <FormInput onChange={handleChange} placeholder='Password' name='pass' type='password'/>

                    <div className={styles.buttonFlex}>
                        <Link href='application'><a className={checkLogin && checkPass ? styles.button_active : ''}>
                            <button className={classNames(styles.button)}
                                    onClick={checkLogin && checkPass && Access ? () => {

                                    } : (event) => {
                                        event.preventDefault();
                                        checkValidate();
                                    }}
                            > Sigh in
                            </button>
                        </a></Link>
                        <Link href='register'><a>
                            <button className={styles.button}>Sigh up</button>
                        </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Authorization;