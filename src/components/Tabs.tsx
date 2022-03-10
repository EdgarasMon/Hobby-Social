import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Tooltip from '@mui/material/Tooltip';
import Modal from '@mui/material/Modal';
import { Button, Typography } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useState, useEffect, useRef } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Picker from 'emoji-picker-react';

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
	const bull = (
		<Box
			component="span"
			sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
		>
			•
		</Box>
	);

	const [anchorEl, setAnchorEl] = useState(null);

	const openEmojies = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const closeEmojies = () => {
		setAnchorEl(null);
	};

	const openEmoji = Boolean(anchorEl);
	const id = openEmoji ? 'simple-popover' : undefined;

	const [text, setText] = useState('');
	const [chosenEmoji, setChosenEmoji] = useState(null);

	useEffect(() => {}, []);

	const onEmojiClick = (event: any, emojiObject: any) => {
		let emoji = setChosenEmoji(emojiObject);
		setText(text.concat(chosenEmoji.emoji));
	};

	const addStory = () => {};

	const inputFile = useRef<HTMLInputElement | null>(null);
	const openfile = (file: any) => {
		inputFile.current.click();
	};

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [value, setValue] = useState('1');

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
									></Typography>

									<Box
										component="form"
										sx={{
											'& .MuiTextField-root': {
												m: 1,
												width: '35ch',
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
											multiline
											rows={6}
											placeholder="Write a Story . . ."
											onChange={e =>
												setText(e.target.value)
											}
											value={text}
										/>
										<Box>
											{' '}
											<input
												type="file"
												ref={inputFile}
												style={{ display: 'none' }}
											/>
											<Tooltip title="Add Photo">
												<Button onClick={openfile}>
													<AddAPhotoIcon />
												</Button>
											</Tooltip>
											<Tooltip title="Add Emoji">
												<Button onClick={openEmojies}>
													<EmojiEmotionsIcon />
												</Button>
											</Tooltip>
											<Popover
												id={id}
												open={openEmoji}
												anchorEl={anchorEl}
												onClose={closeEmojies}
												anchorOrigin={{
													vertical: 'bottom',
													horizontal: 'center',
												}}
											>
												<Picker
													disableSkinTonePicker={true}
													disableSearchBar={true}
													onEmojiClick={onEmojiClick}
													native={true}
												/>
											</Popover>
											<Button
												onClick={addStory}
												variant="contained"
											>
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
			<Card sx={{ maxWidth: 500 }}>
				<CardContent>{text}</CardContent>
			</Card>
		</Box>
	);
}
