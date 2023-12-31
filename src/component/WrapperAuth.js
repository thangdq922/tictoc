import React from "react";
import { getUser } from "../hooks/auth/user.localstore";
import useModal from "../hooks/useModal";
import ModalAuth from "../pages/Default/ModalAuth/ModalAuth";


function WrapperAuth({ children }) {
  const user = getUser()?.data
  const { isOpen, open, toggle } = useModal()
  const handleToLogin = () => {
    if (!user && isOpen === false) {
      open();
    }
  };

  return <div onClick={handleToLogin}>
    <ModalAuth open={isOpen} close={toggle} />
    {children}
  </div>;
}

export default WrapperAuth;
