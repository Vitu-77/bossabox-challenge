import React, { useContext } from 'react';

import { ToolsContext } from '../../store/tools/context';
import { get } from '../../services/api';

import { Tool as StyledTool, Tags } from './styles';

import { IoIosClose } from 'react-icons/io';

export default ({ tool, handleOpenModal, ...rest }) => {
	const { setTools, setLoadingTools, setSearchingByTag } = useContext(
		ToolsContext
	);

	const searchToolsByTag = async (tag) => {
		setLoadingTools(true);

		const { data } = await get(`/tools?tags_like=${tag}`);
		setTools(data);

		setTimeout(() => {
			setLoadingTools(false);
		}, 400);
	};

	const handleTagClick = (tag) => {
		setSearchingByTag(tag);
		searchToolsByTag(tag);
	};

	return (
		<StyledTool {...rest}>
			<header>
				<a href={tool.link} target='_blank' rel='noopener noreferrer'>
					<h3>{tool.title}</h3>
				</a>
				<button onClick={handleOpenModal}>
					<IoIosClose />
					Remove
				</button>
			</header>
			<p className='description'>{tool.description}</p>
			<Tags>
				{tool.tags.map((tag) => {
					const tooltip = `search all tools with tag ${tag}`;
					return (
						<span
							tooltip={tooltip}
							key={`${Math.random()}-${tag}`}
							onClick={() => handleTagClick(tag)}>
							{tag}
						</span>
					);
				})}
			</Tags>
		</StyledTool>
	);
};
