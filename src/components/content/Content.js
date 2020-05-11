import React from 'react';
import './content.scss';
import Button from '../button/Button';
import Sidebar from '../sidebar/Sidebar';
import Time from '../time/Time';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(1),
			width: theme.spacing(16),
			height: theme.spacing(16)
		}
	}
}));

const GreenRadio = withStyles({
	root: {
		color: green[400],
		'&$checked': {
			color: green[600]
		}
	},
	checked: {}
})((props) => <Radio color="default" {...props} />);

const Content = ({
	pilihan,
	pertanyaan,
	nomor,
	onChangeChoices,
	checked,
	to,
	onClickSoal,
	data,
	onClickSidebar,
	existenceAnswer,
	page,
	jam,
	menit,
	detik
}) => {
	const classes = useStyles();
	return (
		<div className="flex">
			<div className="card">
				<p className="question">
					{nomor}. {pertanyaan}
				</p>
				{pilihan.map((item, i) => (
					<div key={i} className="choices">
            <ListItem button>
						<Radio
							onChange={() => onChangeChoices(item.key)}
							value={item.key}
							checked={checked === item.key}
							color="default"
							name="radio-button-demo"
						/>
						
							<ListItemText inset >
                {item.key}. {item.value}
              </ListItemText>
						</ListItem>
						<p >
							
						</p>
					</div>
				))}
				<Button
					to={to}
					onClickSoal={onClickSoal}
					buttonText={page === data.length ? 'Selesai' : 'Berikutnya'}
				/>
			</div>
			<div className="right-side">
				<Time jam={jam} menit={menit} detik={detik} />
				<Sidebar data={data} onClickSoal={(item) => onClickSidebar(item)} existenceAnswer={existenceAnswer} />
			</div>
		</div>
	);
};

export default Content;
