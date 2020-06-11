import React, { useRef, useContext } from 'react';
import { ToolsContext } from '../../store/tools/context';
import { destroy } from '../../services/api';

import Tool from '../Tool';
import Modal from '../modal';
import { PrimaryButton, SecondaryButton } from '../buttons';
import { List as StyledList, ModalContent } from './styles';

import { IoIosClose } from 'react-icons/io';

export default () => {
	const removeToolModalRef = useRef(null);
	const { tools, setTools } = useContext(ToolsContext);

	const handleCancel = () => removeToolModalRef.current.closeModal();

	const handleRemoveTool = async () => {
		const toolId = removeToolModalRef.current.getData();

		removeToolModalRef.current.lock();

		const response = await destroy(`/tools/${toolId}`);

		if (response.status === 200) {
			setTools(tools.filter((tool) => tool.id !== toolId));
			removeToolModalRef.current.unlock();
			removeToolModalRef.current.closeModal();
		}
	};

	return (
		<>
			<Modal ref={removeToolModalRef}>
				<ModalContent>
					<div className='modal-title'>
						<IoIosClose /> Remove tool
					</div>
					<div>
						<p>Are you sure you want to remove this tool?</p>
					</div>
					<div>
						<SecondaryButton onClick={handleCancel}>Cancel</SecondaryButton>
						<PrimaryButton color='danger' onClick={handleRemoveTool}>
							Yes, remove
						</PrimaryButton>
					</div>
				</ModalContent>
			</Modal>
			<StyledList>
				{tools.map((tool) => (
					<Tool
						tool={tool}
						key={tool.id}
						handleOpenModal={() =>
							removeToolModalRef.current.openModal(tool.id)
						}
					/>
				))}
			</StyledList>
		</>
	);
};
