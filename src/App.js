import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import themes from './styles/themes';

import RootProvider from './store/RootProvider';

export default () => (
	<RootProvider>
		<ThemeProvider theme={themes.light}>
			<GlobalStyle />
			<Routes />
		</ThemeProvider>
	</RootProvider>
);
