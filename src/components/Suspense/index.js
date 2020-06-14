import React from 'react';
import { BarLoader } from 'react-spinners';
import { Loading } from './styles';

export default ({ loading, children }) => {
	if (loading) {
		return (
			<Loading>
				<BarLoader />
			</Loading>
		);
	}

	return <React.Fragment>{children}</React.Fragment>;
};
