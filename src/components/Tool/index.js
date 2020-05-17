import React from 'react';
import { Tool as StyledTool, Tags } from './styles';

import { IoIosClose } from 'react-icons/io';

export default ({ tool }) => {
    return (
        <StyledTool>
            <header>
                <a href={tool.link} target='_blank' rel='noopener noreferrer'>
                    <h3>{tool.title}</h3>
                </a>
                <button><IoIosClose />Remove</button>
            </header>
            <p className='description'>{tool.description}</p>
            <Tags>
                {tool.tags.map(tag => {
                    const tooltip = `search all tools with tag ${tag}`
                    return <span tooltip={tooltip} key={tag}>{tag}</span>
                })}
            </Tags>
        </StyledTool>
    )
}