import React from 'react';

import { Tool as StyledTool, Tags } from './styles';

import { IoIosClose } from 'react-icons/io';

export default ({ tool, handleOpenModal, ...rest }) => {
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
						<span tooltip={tooltip} key={tag}>
							{tag}
						</span>
					);
				})}
			</Tags>
		</StyledTool>
	);
};
