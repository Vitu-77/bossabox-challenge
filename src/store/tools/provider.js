import React, { useState } from 'react';

import { ToolsContext } from './context';

export const ToolsProvider = ({ children }) => {
	const [tools, setTools] = useState([]);
	const [loadingTools, setLoadingTools] = useState(false);
	const [searchingByTag, setSearchingByTag] = useState('');

	return (
		<ToolsContext.Provider
			value={{
				tools,
				setTools,
				loadingTools,
				setLoadingTools,
				searchingByTag,
				setSearchingByTag,
			}}>
			{children}
		</ToolsContext.Provider>
	);
};
