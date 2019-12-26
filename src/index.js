import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#F98205',
		},
		secondary: {
			main: '#F98205',
		},
		text: {
			main: 'rgb(70,68,68)',
		},
	},
	status: {
		danger: 'orange',
	},
})

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>,
	document.getElementById('root')
)
