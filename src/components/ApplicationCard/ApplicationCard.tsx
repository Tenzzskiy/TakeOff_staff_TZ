import React, {useState} from 'react';
import {ApplicationCardProps} from "./ApplicationCard.props";
import styles from './ApplicationCard.module.scss'
import Exit from "../icons/exit";
import Update from "../icons/update";
import {useDispatch} from "react-redux";
import {DeleteUser, UpdateContact} from "../../redux/cart/reducer";
import {FormInput} from "../FormInput";



const ApplicationCard = ({Users}:ApplicationCardProps) => {
    const dispatch = useDispatch();
    const [update,setUpdate] = useState(false);
    const [data,setData] = useState({name:Users.name,website:Users.website,company:Users.company,id:Users.id})
    console.log(Users)
  const handleDelete = () =>{
        dispatch(DeleteUser(Users))
    }
    const handleUpdate = () =>{
      setUpdate((prevState => !prevState));
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(prev => {
            return {...data, [e.target.name]: e.target.value}
        })

    }
    const handleAccessUpdate = () =>{
        dispatch(UpdateContact(data))
    }
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <div className={styles.img}>
                    <img src='/contact.jpg' alt=""/>
                </div>
                <div className={styles.desc}>
                    <div className={styles.exit} onClick={() =>{
                        handleDelete();
                    }}><Exit /></div>
                    <div className={styles.update}
                    onClick={() =>{
                        handleUpdate();
                    }}
                    ><Update /></div>
                <h1 className={styles.name}>{Users.name}</h1>
                    {!update ?
                    <>
                        <p>id:  {Users.id}</p>
                        <p>website:  {Users.website}</p>
                        <p>company:  {Users.company}</p>
                    </> :
                       <div className={styles.updateFlex}>
                          <div className={styles.inputFlex}>
                              <FormInput onChange={handleChange} placeholder='Name' name='name' value={data.name} />
                              <FormInput onChange={handleChange} placeholder='Website' name='website' value={data.website}/>
                              <FormInput onChange={handleChange} placeholder='Company' name='company' value={data.company}/>
                          </div>
                           <div className={styles.accessButton} onClick={() =>{
                               handleAccessUpdate();
                               setUpdate(prevState => !prevState)
                           }
                           }>
                                <button>Редактировать</button>
                           </div>
                       </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ApplicationCard;