import React from 'react';
import { List as StyledList } from './styles';
import Tool from '../Tool';

export default ({ tools }) => (
    <StyledList>
        {tools.map(tool => <Tool tool={tool} key={tool.id} />)}
    </StyledList>
)