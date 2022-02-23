import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

import Modal from '@mui/material/Modal';
import { Button, Typography } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export default function LabTabs() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [value, setValue] = React.useState('1');

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%', typography: 'body1' }}>
			<TabContext value={value}>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						alignSelf: 'center',
						flexDirection: 'column',
					}}
				>
					<TabList
						onChange={handleChange}
						aria-label="lab API tabs example"
					>
						<Tab label="Home" value="1" />
						<Tab label="Friends" value="2" />
					</TabList>
				</Box>
				<TabPanel
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						alignSelf: 'center',
						flexDirection: 'column',
					}}
					value="1"
				>
					<Box sx={{ display: 'flex' }}>
						<Box sx={{ pr: 2 }}>
							{' '}
							<IconButton
								size="large"
								edge="end"
								aria-label="account of current user"
								aria-haspopup="true"
							>
								<AccountCircle />
							</IconButton>
						</Box>
						<Box>
							{' '}
							<TextField
								id="outlined-basic"
								label="Write a Story.."
								variant="outlined"
								onClick={handleOpen}
							/>
							<Modal
								keepMounted
								open={open}
								onClose={handleClose}
								aria-labelledby="keep-mounted-modal-title"
								aria-describedby="keep-mounted-modal-description"
							>
								<Box sx={style}>
									<Typography
										id="keep-mounted-modal-title"
										variant="h6"
										component="h2"
									>
										Write a Story . . .
									</Typography>

									<Box
										component="form"
										sx={{
											'& .MuiTextField-root': {
												m: 1,
												width: '50ch',
											},
											display: 'flex',
											justifyContent: 'center',
											flexDirection: 'column',
											flexWrap: 'wrap',
											alignContent: 'stretch',
											alignItems: 'center',
										}}
										noValidate
										autoComplete="off"
									>
										<TextField
											id="outlined-multiline-static"
											label="Story"
											multiline
											rows={4}
											defaultValue=". . ."
										/>
										<Box>
											{' '}
											<Tooltip title="Add Photo">
												<Button>
													<AddAPhotoIcon />
												</Button>
											</Tooltip>
											<Tooltip title="Add Emoji">
												<Button>
													<EmojiEmotionsIcon />
												</Button>
											</Tooltip>
											<Button variant="contained">
												Post
											</Button>
										</Box>
									</Box>
								</Box>
							</Modal>
						</Box>
					</Box>
				</TabPanel>
				<TabPanel
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						alignSelf: 'center',
						flexDirection: 'column',
					}}
					value="2"
				>
					Frhjghjhgjiends
				</TabPanel>
			</TabContext>
		</Box>
	);
}
