import React, { memo } from "react"
import Modal from "react-modal"


Modal.setAppElement("div")

const fullScreen = {
  overlay:
  {
    zIndex: 10
  },
  content: {
    position: "fixed",
    inset: "0px",
    background: "rgb(255, 255, 255)",
    zIndex: "10",
    display: "flex",
    flexDirection: "row",
  },
}

const small = {}

const login = {
  overlay: {
    zIndex: 10,
    width: '100vw',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    borderRadius: 8,
    inset: 0,
    transition: 'all 300ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s',
    transform: 'none',
    margin: 'auto',
    position: 'relative',
    maxHeight: 693,
    height: '80%',
    overflow: 'hidden',
    backgroundColor: 'rgb(255, 255, 255)',
    padding: 0
  }
}

const profile = {
  overlay:
  {
    zIndex: 10,
    boxSizing: 'border-box'
  },
  content: {
    boxSizing: 'border-box',
    position: 'fixed',
    inset: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'auto',
    
  },
}

function CustomModal({ children, isOpen, type, ...props }) {

  const classes = {
    'fullScreen': fullScreen,
    'login': login,
    'profile': profile,
  }

  return (
    <Modal
      isOpen={isOpen}
      style={type ? classes[type] : small}
    // {...props}
    >
      {children}
    </Modal>
  )
}

export default memo(CustomModal)
