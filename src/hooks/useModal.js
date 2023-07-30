import { useState } from 'react';

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen(!isOpen);
    }

    function open(){
        setIsOpen(true)
    }

    return {
        isOpen,
        toggle,
        open
    }
};

export default useModal;
