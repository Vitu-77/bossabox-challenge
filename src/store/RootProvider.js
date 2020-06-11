import React from 'react';

import { ToolsProvider } from './tools/provider';

const RootProvider = ({ children }) => {
	return <ToolsProvider>{children}</ToolsProvider>;
};

export default RootProvider;
