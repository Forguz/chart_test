import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'

export default function CustomAppBar({ classes }) {
	return (
		<AppBar position='static' className={classes.root}>
			<Toolbar>
				<IconButton
					edge='start'
					className={classes.menuButton}
					color='inherit'
					aria-label='menu'
				>
					<KeyboardArrowLeftIcon edge='center' fontSize='large' />
				</IconButton>
				<Typography variant='h2' className={classes.title}>
					Dashboard
				</Typography>
			</Toolbar>
		</AppBar>
	)
}
