import React from 'react';
import { NavLink } from 'react-router-dom';
import Buttons from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './button.scss';

const theme = createMuiTheme({
	palette: {
		primary: {
			// This is green.A700 as hex.
			main: '#20b2aa'
		}
	}
});

const Button = ({ to, onClickSoal, buttonText }) => {
	return (
		<div onClick={onClickSoal}>
			<NavLink to={to}>
				<ThemeProvider theme={theme}>
					<Buttons className="button" variant="contained" color="primary">
						{buttonText}
					</Buttons>
				</ThemeProvider>
			</NavLink>
		</div>
	);
};

export default Button;
