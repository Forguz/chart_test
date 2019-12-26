import React from 'react'
import { Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts'
import GraficoTorta from '../components/charts/GraficoTorta'
import CustomAppBar from '../components/CustomAppBar'

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		display: 'flex',
		backgroundColor: 'rgb(30,30,30)',
		color: 'white',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		// flexGrow: 1,
		justifySelf: 'center',
		alignSelf: 'self',
		textShadow: '1px 1px 12px rgb(109,109,109)',
	},
	father: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: 'rgb(240,240,240)',
	},
	pieScrollable: {
		justifyContent: 'space-between',
		alignItems: 'center',
		overflowX: 'auto',
		width: '94%',
		padding: '30px',
		height: 600,
		display: 'flex',
		alignSelf: 'center',
		// perspective: '1500px',
		// WebkitPerspective: '1500px',
		// '&:hover *': {
		// 	transform: 'rotate(0)',
		// },
		[theme.breakpoints.down('sm')]: {
			overflowX: 'auto',
		},
	},
}))

function Main() {
	const classes = useStyles()
	const data = [
		{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
		{ name: 'Page B', uv: 100, pv: 2400, amt: 2400 },
		{ name: 'Page C', uv: 831, pv: 2400, amt: 2400 },
		{ name: 'Page D', uv: 245, pv: 2400, amt: 2400 },
		{ name: 'Page E', uv: 565, pv: 2400, amt: 2400 },
	]
	const data01 = [
		{ name: 'Group A', value: 423 },
		{ name: 'Group B', value: 952 },
		{ name: 'Group C', value: 631 },
		{ name: 'Group D', value: 379 },
		{ name: 'Group E', value: 278 },
		{ name: 'Group F', value: 189 },
	]

	const numberOfPies = [1, 2, 3, 4]

	const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'purple']

	return (
		<div className={classes.father}>
			{/* <Typography
				variant='h2'
				style={{
					color: 'white',
					textShadow: '1px 1px 12px rgb(109,109,109)',
					alignSelf: 'center',
				}}
			>
				Dashboard
			</Typography> */}
			<CustomAppBar classes={classes} />
			{/* <Divider /> */}
			<div
				style={{
					alignSelf: 'center',
					justifySelf: 'center',
					display: 'flex',
					padding: '5px',
					width: '95%',
					borderBottom: '1px solid lightgrey',
					// textShadow: '.5px .5px 8px rgb(10,10,10)',
					marginTop: '20px',
					marginBottom: '20px',
				}}
			>
				<Typography variant='h2' color='primary'>
					Pie Charts
				</Typography>
			</div>
			<div className={classes.pieScrollable}>
				{numberOfPies.map(a => (
					<GraficoTorta key={a} data={data01} colors={COLORS} title='Revenue' />
				))}
			</div>
			<div
				style={{
					alignSelf: 'center',
					display: 'flex',
					width: '95%',
					borderBottom: '1px solid lightgrey',
					// textShadow: '.5px .5px 8px rgb(30,30,30)',
					justifyContent: 'flex-end',
					marginTop: '20px',
					marginBottom: '20px',
				}}
			>
				<Typography variant='h2' color='primary'>
					Area Charts
				</Typography>
			</div>
			<div style={{ alignSelf: 'center', width: '95%', marginTop: 20 }}>
				<ResponsiveContainer width='99%' height={400}>
					<LineChart
						data={data}
						margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
					>
						<Line type='monotone' dataKey='uv' stroke='#F98205' />
						<CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
						<XAxis dataKey='name' />
						<YAxis />
						<Tooltip hover />
					</LineChart>
				</ResponsiveContainer>
			</div>
			{/* <BottomNavigation
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue)
				}}
				showLabels
				className={classes.bottomNavigation}
			>
				<BottomNavigationAction label='Recents' icon={<RestoreIcon />} />
				<BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />
				<BottomNavigationAction label='Nearby' icon={<LocationOnIcon />} />
			</BottomNavigation> */}
		</div>
	)
}

export default Main
