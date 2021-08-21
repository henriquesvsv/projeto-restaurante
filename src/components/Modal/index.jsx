import React, { useEffect } from 'react';

import Portal from './Portal';
import { Overlay, Dialog } from './styles';

const Modal = ({  open, onclose , children}) => {
  useEffect(() => {
    function onEsc(event) {
      if (event.keyCode === 27)onclose();
    }
    window.addEventListener('keydown', onEsc);

    return () => {
      window.addEventListener('keydown', onEsc);
    };
  }, [onclose]);

  if (!open) return null;

  function onOverlayClick() {
      onclose();
  }

  function onDialogClick(event) {
    event.stopPropagation();
  }

  

  return (
    <Portal>
      <Overlay onClick={onOverlayClick}>
        <Dialog onClick={onDialogClick}>{children}</Dialog>
      </Overlay>
    </Portal>
  );
};

export default Modal;