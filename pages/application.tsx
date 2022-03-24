import React, {useState} from 'react';
import {useEffect} from "react";
import Router from 'next/router';
import {useDispatch, useSelector} from 'react-redux';
import styles from './../src/styles/Home.module.css'
import Application from "../src/components/Application";
import Plus from "../src/components/icons/plus";
import {AnimatePresence} from "framer-motion";
import Portal from './../src/helpers/Portal/Portal'
import OverlayingPopup from './../src/helpers/OverlayingPopup/OverlayingPopup'
import AddContact from "../src/components/AddContact";



const ApplicationPage = () => {
    const [modal,setModal] = useState(false);



    // @ts-ignore
    const Access = useSelector(state => state.cart.authorize);
    useEffect(() => {
        const {pathname} = Router
      if (!Access){
          if(pathname == '/application' ){
              Router.push( '/')
          }
      }
    });


    return (
        <div className={styles.application}>
            <AnimatePresence>
                {modal && <Portal>
                    <OverlayingPopup isOpened={modal} onClose={() => {
                        setModal(prev => !prev);
                    }
                    }>

                        <AddContact setModal={setModal} />

                    </OverlayingPopup>
                </Portal>}
            </AnimatePresence>
            <Application/>
            <div className={styles.add} onClick={typeof setModal !== 'undefined' ? () => setModal(prev => !prev) : () => null}><Plus /> </div>

        </div>
    );
};

export default ApplicationPage;