import React, { useEffect } from "react";
import cs from "classnames";
import Portal from "../Portal/Portal";
import Overlay from "../Overlay/Overlay";
import { motion } from "framer-motion";
import s from "./OverlayingPopup.module.scss";
import {useLockBodyScroll} from "../useLockBodyScroll";


const variatns = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  hidden2: {
    opacity: 0,
  },
};

const OverlayingPopup = (props) => {
  const {
    children,
    isOpened,
    onClose,
    isButtonClose,
    isBottom,
    isLeft,
    overlayClass,
    child,
    classBtnClose,
  } = props;
  useEffect(() => {
    isOpened
      ? (document.getElementById("__next").style.overflow = "hidden")
      : (document.getElementById("__next").style.overflow = "auto");
  }, []);
  useLockBodyScroll();
  return (
    <Portal>
      <motion.div
        className={cs(overlayClass, s.container, isOpened && s.opened)}
        role="dialog"
        transition={{ duration: 0.3, type: "tween" }}
        initial="hidden"
        animate="visible"
        exit="hidden2"
        variants={variatns}
      >
        <Overlay onClose={onClose} isLeft={isLeft} />
        <div
          className={cs(
            s.childrenWrapper,
            isBottom && s.childrenWrapperBottom,
            isLeft && s.childrenWrapperLeft,
            child
          )}
        >
          {children}
          {/* {isButtonClose && (
            <SliderCloseButton onClick={onClose} className={classBtnClose} />
          )} */}
        </div>
      </motion.div>
    </Portal>
  );
};

export default OverlayingPopup;
