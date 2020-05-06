import React from 'react';
import './header.scss';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	},
	large: {
		width: theme.spacing(20),
		height: theme.spacing(20)
	}
}));

const logo = require('../../assets/silontong.png');
const Header = () => {
	const classes = useStyles();
	const [ open, setOpen ] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div className={classes.root}>
			<AppBar style={{ background: 'linear-gradient(to right, #3CA3A2, teal, #3CA3A2)' }} position="static">
				<Toolbar>
					<Typography variant="h5" className={classes.title}>
						<Box style={{ fontFamily:'Arima Madurai, cursive' }} fontWeight="fontWeightBold" m={1}>
							Silontong Quiz
						</Box>
					</Typography>
					<Button color="inherit" fontWeight="fontWeightBold" m={1} onClick={handleOpen}>
						About
					</Button>
					<Modal
						aria-labelledby="transition-modal-title"
						aria-describedby="transition-modal-description"
						className={classes.modal}
						open={open}
						onClose={handleClose}
						closeAfterTransition
						BackdropComponent={Backdrop}
						BackdropProps={{
							timeout: 500
						}}
					>
						<Fade in={open}>
								<Card
									style={{
										border: 'none',
										outline: 'none',
										borderRadius: '3px',
										marginLeft: '10%',
										marginRight: '10%'
									}}
									className={classes.paper}
								>
									<CardActionArea>
										<CardMedia
											component="img"
											height="200"
											image={logo}
											title="Contemplative Reptile"
										/>
										<CardContent>
											<Typography gutterBottom variant="h5" component="h2">
												Silontong Quiz
											</Typography>
											<Typography variant="body2" color="textSecondary" component="p">
												Silontong Quiz kini hadir untuk mengisi kegiatan anda, yang bertujuan untuk melatih kecerdasan dalam menyelesaikan pertanyaan - pertanyaan yang ada.
												Silontong Quiz dikembangkan oleh Muhammad Wahyudi.
											</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button size="small" color="secondary" onClick={handleClose}>
											Tutup
										</Button>
									</CardActions>
								</Card>
						</Fade>
					</Modal>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
