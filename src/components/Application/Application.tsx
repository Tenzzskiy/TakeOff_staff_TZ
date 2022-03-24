import React from 'react';
import styles from './Application.module.scss'
import ApplicationCard from "../ApplicationCard";
import {useSelector} from "react-redux";
import {card} from "../../Types/index.props";
const Application = () => {

    // @ts-ignore
    const Contacts = useSelector(state => state.cart.contacts);
    const cards = Contacts.map((elem:card,index:number) => <ApplicationCard key={index} Users={elem} />)
    return (
        <>
        <div className={styles.application}>

            {cards}
        </div>
        </>
    );
};

export default Application;