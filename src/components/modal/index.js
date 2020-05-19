import React, { useState, useEffect, useImperativeHandle } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Transition } from 'react-transition-group';
import { ModalContainer, Modal } from './styles';

const duration = 200;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: { opacity: 1, pointerEvents: 'all' },
    entered: { opacity: 1, pointerEvents: 'all' },
    exiting: { opacity: 0, pointerEvents: 'none' },
    exited: { opacity: 0, pointerEvents: 'none' },
};

export default React.forwardRef(({ onHide, children }, modalRef) => {
    const [show, setShow] = useState(false);
    const [top, setTop] = useState(0);

    const close = () => {
        console.log('close');
        setShow(false);
        onHide && onHide();
    }

    const open = () => {
        setShow(true);
    }

    useImperativeHandle(modalRef, () => ({
        closeModal() {
            close();
        },
        openModal() {
            open();
        }
    }));

    useEffect(() => {
        const body = document.querySelector('body');
        setTop(window.scrollY);

        if (show) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }

        setShow(show);
    }, [show]);

    return (
        <Transition in={show} timeout={duration} appear nodeRef={modalRef.current}>
            {state => (
                <ModalContainer top={top} ref={modalRef} style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                    <OutsideClickHandler onOutsideClick={close}>
                        <Modal show={show}>
                            {children}
                        </Modal>
                    </OutsideClickHandler>
                </ModalContainer>
            )}
        </Transition>
    )
})