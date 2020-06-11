import React, { useState, useEffect, useImperativeHandle } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Transition } from 'react-transition-group';
import { ModalContainer, Modal as StyledModal } from './styles';
import PropTypes from 'prop-types';

const duration = 200;

const defaultStyle = {
	transition: `opacity ${duration}ms ease-in-out`,
	opacity: 0,
};

const transitionStyles = {
	entering: { opacity: 1, pointerEvents: 'all' },
	entered: { opacity: 1, pointerEvents: 'all' },
	exiting: { opacity: 0, pointerEvents: 'none' },
	exited: { opacity: 0, pointerEvents: 'none' },
};

const Modal = React.forwardRef(({ onHide, onOpen, children }, modalRef) => {
	const [show, setShow] = useState(false);
	const [top, setTop] = useState(0);
	const [lockModal, setLockModal] = useState(false);

	const [data, setData] = useState(null);

	const close = async () => {
		if (lockModal) {
			return;
		}

		if (data) {
			setData(null);
		}

		if (onHide) {
			await onHide();
		}

		setShow(false);
	};

	const open = async (data) => {
		if (data) {
			setData(data);
		}

		if (onOpen) {
			await onOpen();
		}

		setShow(true);
	};

	const lock = async () => setLockModal(true);
	const unlock = async () => setLockModal(false);

	useImperativeHandle(modalRef, () => ({
		getData() {
			return data;
		},
		closeModal() {
			close();
		},
		openModal(data) {
			open(data);
		},
		lock() {
			lock();
		},
		unlock() {
			unlock();
		},
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
			{(state) => (
				<ModalContainer
					top={top}
					ref={modalRef}
					style={{
						...defaultStyle,
						...transitionStyles[state],
					}}>
					<OutsideClickHandler
						onOutsideClick={() => {
							return !lockModal ? close() : null;
						}}>
						<StyledModal show={show}>{children}</StyledModal>
					</OutsideClickHandler>
				</ModalContainer>
			)}
		</Transition>
	);
});

Modal.propTypes = {
	onHide: PropTypes.func,
	onClose: PropTypes.func,
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};

export default Modal;
