import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import style from './dialog.module.css';

const dialogRootElement = document.querySelector('.dialog');

const Dialog = (props) => {
  const { open, onClose } = props;
  const elem = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    if (open) {
      dialogRootElement.appendChild(elem);
      return () => {
        dialogRootElement.removeChild(elem);
      };
    }
  });
  if (open) {
    return createPortal(
      <div className={style.dialog__bg} onClick={onClose}>
        <div className={style.dialog__card}>{props.children}</div>
      </div>,
      elem
    );
  } else return null;
};

export default Dialog;
