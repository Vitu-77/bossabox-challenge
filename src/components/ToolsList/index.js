import React, { useRef, useContext } from 'react';
import { ToolsContext } from '../../store/tools/context';
import { destroy } from '../../services/api';
import { ClipLoader } from 'react-spinners';
import Tool from '../Tool';
import Modal from '../modal';
import { PrimaryButton, SecondaryButton } from '../buttons';
import {
	List as StyledList,
	ModalContent,
	FillWidth,
	SearchingByTag,
} from './styles';

import { IoIosClose } from 'react-icons/io';

const ToolsList = () => {
	const removeToolModalRef = useRef(null);
	const {
		tools,
		setTools,
		loadingTools,
		searchingByTag,
		setSearchingByTag,
	} = useContext(ToolsContext);

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

	if (loadingTools) {
		return (
			<FillWidth>
				<ClipLoader size={45} loading={loadingTools} />
			</FillWidth>
		);
	}

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
				{searchingByTag && (
					<SearchingByTag>
						<span>#</span>
						<p>{searchingByTag}</p>
					</SearchingByTag>
				)}
				{tools.length ? (
					tools.map((tool) => (
						<Tool
							tool={tool}
							key={tool.id}
							handleOpenModal={() =>
								removeToolModalRef.current.openModal(tool.id)
							}
						/>
					))
				) : (
					<FillWidth>
						<p className='empty'>No tools found</p>
					</FillWidth>
				)}
			</StyledList>
		</>
	);
};

export default ToolsList;
