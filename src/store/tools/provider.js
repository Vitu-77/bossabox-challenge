import React from 'react';

import { ToolsContext } from './context';

export const ToolsProvider = ({ children }) => {
	const [tools, setTools] = React.useState([]);

	return (
		<ToolsContext.Provider value={{ tools, setTools }}>
			{children}
		</ToolsContext.Provider>
	);
};
