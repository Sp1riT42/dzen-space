import styled from 'styled-components';

import overlay from './overlay.png';

export const SApp = styled.div.attrs(
	(props: { backgroundImg: string }) => props
)`
	height: 100vh;
	display: flex;
	flex-direction: column;
	background-image: ${props => props.backgroundImg};
	background-size: cover;
	background-position: center;

	.overlay {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100vh;
		background-image: url(${overlay});
		background-size: cover;
		background-position: center;
	}

	.header {
		height: 60px;
		z-index: 1;
	}
	.center {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		z-index: 1;
	}

	.footer {
		height: 60px;
		z-index: 1;
	}
`;
