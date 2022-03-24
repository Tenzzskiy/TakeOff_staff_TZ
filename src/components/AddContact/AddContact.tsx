import React, {Dispatch, SetStateAction, useState} from 'react';
import styles from './AddContact.module.scss'
import {FormInput} from "../FormInput";
import {useDispatch, useSelector} from "react-redux";
import {AddContacting} from "../../redux/cart/reducer";

interface addContact {
        setModal:Dispatch<SetStateAction<boolean>>
}
const AddContact = ({setModal}:addContact) => {
    const dispatch = useDispatch();
    const [data,setData] = useState({name:"",website:"",company:""})
    // @ts-ignore
    const Contacts = useSelector(state => state.cart.contacts);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(prev => {
            return {...data, [e.target.name]: e.target.value}
        })

    }
    const handleAdd = () => {

            dispatch(AddContacting({
                id:Contacts.length +1,
                website:data.website,
                name:data.name,
                company:data.company
            }))
            setModal(prevState => !prevState)

    }
     return (
        <div className={styles.add}>
                <div className={styles.content}>

                        <h1>Добавить контакт</h1>
                        <div className={styles.flex}>
                            <FormInput onChange={handleChange} placeholder='Name' name='name' />
                            <FormInput onChange={handleChange} placeholder='Website' name='website'/>
                            <FormInput onChange={handleChange} placeholder='Company' name='company'/>
                        </div>
                    <button className={styles.button} onClick={() => data.name.length > 0 && data.website.length > 0 && data.company.length >0 ?
                        handleAdd() :  alert('Заполните поля') }> Добавить</button>
                </div>
        </div>
    );
};

export default AddContact;