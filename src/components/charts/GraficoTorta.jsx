import React from 'react'
import { PieChart, Pie, Tooltip, Cell } from 'recharts'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	'@global': {
		boxSizing: 'border-box',
	},
	pieContainer: {
		width: 340,
		// backgroundColor: 'red',
		margin: '10px 20px 20px 20px',
		boxShadow: '-6px 6px 2px -3px  rgba(100,100,100,.1)',
		border: '2px solid lightgrey',
		transition: '.2s ease',
		borderRadius: '5px',
		[theme.breakpoints.down('sm')]: {
			width: '95%',
		},
		// WebkitPerspective: '1000px',
		// perspective: '1000px',
		transform: 'rotateY(20deg)',
		'&:hover': {
			// bordereft: '3px solid' + theme.palette.primary.main,
			border: '2px solid' + theme.palette.primary.main,
			boxShadow: '0 0 16px' + theme.palette.primary.main,
			backgroundColor: 'rgba(255,255,255, .95)',
			// transform: 'rotate(0)',
			cursor: 'pointer',
		},
		'&:hover *': {
			borderColor: theme.palette.primary.main,
			cursor: 'pointer',
		},
		'&:active': {
			filter: `drop-shadow(0 0 0 ${theme.palette.primary.main})`,
			transition: 'filter 0s',
		},
		// border: '1px solid' + theme.palette.primary.main,
		// boxSshadow: 'inset 0 0 2000px rgba(255, 255, 255, .5)',
		// filter: 'blur(10px)',
	},
}))

function GraficoTorta({ data, colors, title }) {
	const classes = useStyles()
	return (
		<div className={classes.pieContainer}>
			<Typography
				variant='h4'
				color='primary'
				align='center'
				style={{
					margin: '15px',
					background: 'rgba(240, 240, 240, .95)',
					border: '1px solid orange',
					boxShadow: '0 0 5px 2px lightgrey',
					// borderStyle: 'ridge',
					borderRadius: '10px',
				}}
			>
				{title}
			</Typography>
			{/* <ResponsiveContainer width='99%' height={400}> */}
			<PieChart width={330} height={400}>
				<Pie
					dataKey='value'
					isAnimationActive={true}
					data={data}
					outerRadius={120}
					fill='aqua'
					stroke='aqua'
					label
				>
					{data.map((entry, index) => (
						<Cell
							key={`cell-${index}`}
							fill={colors[index % colors.length]}
							stroke={colors[index % colors.length]}
						/>
					))}
					<Typography>
						{console.log(data.reduce((reducer, a) => reducer + a))}
					</Typography>
				</Pie>
				<Tooltip />
			</PieChart>
			{/* </ResponsiveContainer> */}
		</div>
	)
}

export default GraficoTorta
