import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, TextField, Typography } from '@mui/material';

import SaveIcon from '@mui/icons-material/Save';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const hobbies = [
	'3D printing',
	'Acroyoga',
	'Acting',
	'Animation',
	'Anime',
	'Aquascaping',
	'Art',
	'Astrology',
	'Baking',
	'Barbershop Music',
	'Baton twirling',
	'Beatboxing',
	'Beer tasting',
	'Bell ringing',
	'Binge watching',
	'Blogging',
	'Board/tabletop games',
	'Book discussion clubs',
	'Book restoration',
	'Bowling',
	'Brazilian jiu-jitsu',
	'Breadmaking',
	'Bullet journaling',
	'Calligraphy',
	'Candle making',
	'Candy making',
	'Car Spotting',
	'Car fixing & building',
	'Card games',
	'Cardistry',
	'Ceramics',
	'Chatting',
	'Cheesemaking',
	'Chess',
	'Cleaning',
	'Clothesmaking',
	'Coffee roasting',
	'Collecting',
	'Coloring',
	'Communication',
	'Community activism',
	'Computer programming',
	'Confectionery',
	'Conlanging',
	'Construction',
	'Cooking',
	'Cosplaying',
	'Couch surfing',
	'Couponing',
	'Craft',
	'Creative writing',
	'Crocheting',
	'Cross-stitch',
	'Crossword puzzles',
	'Cryptography',
	'Cue sports',
	'Dance',
	'Decorating',
	'Digital arts',
	'Dining',
	'Diorama',
	'Distro Hopping',
	'Diving',
	'Djembe',
	'DJing',
	'Do it yourself',
	'Drama',
	'Drawing',
	'Drink mixing',
	'Electronic games',
	'Electronics',
	'Embroidery',
	'Engraving',
	'Entertaining',
	'Experimenting',
	'Fantasy sports',
	'Fashion',
	'Fashion design',
	'Feng shui decorating',
	'Filmmaking',
	'Fingerpainting',
	'Fishfarming',
	'Fishkeeping',
	'Flower arranging',
	'Fly tying',
	'Foreign language learning',
	'Furniture building',
	'Gaming (tabletop games, role-playing games, Electronic games)',
	'Genealogy',
	'Gingerbread house making',
	'Giving advice',
	'Glassblowing',
	'Gardening',
	'Gongfu tea',
	'Graphic design',
	'Gunsmithing',
	'Hacking',
	'Hardware',
	'Herp keeping',
	'Home improvement',
	'Homebrewing',
	'Houseplant care',
	'Hula hooping',
	'Humor',
	'Hydrodipping',
	'Hydroponics',
	'Ice skating',
	'Inventing',
	'Jewelry making',
	'Jigsaw puzzles',
	'Journaling',
	'Juggling',
	'Karaoke',
	'Karate',
	'Kendama',
	'Knife making',
	'Knitting',
	'Knot tying',
	'Kombucha brewing',
	'Kung fu',
	'Lace making',
	'Lapidary',
	'Leather crafting',
	'Lego building',
	'Livestreaming',
	'Listening to music',
	'Listening to podcasts',
	'Lock picking',
	'Machining',
	'Macrame',
	'Magic',
	'Makeup',
	'Manga',
	'Massaging',
	'Mazes (indoor/outdoor)',
	'Mechanics',
	'Meditation',
	'Memory training',
	'Metalworking',
	'Miniature art',
	'Minimalism',
	'Model building',
	'Modeling',
	'Model engineering',
	'Music',
	'Nail art',
	'Needlepoint',
	'Origami',
	'Painting',
	'Pen Spinning',
	'Pet',
	'Pet adoption & fostering',
	'Pet sitting',
	'Philately',
	'Photography',
	'Pilates',
	'Planning',
	'Plastic art',
	'Playing musical instruments',
	'Poetry',
	'Poi',
	'Pole dancing',
	'Postcrossing',
	'Pottery',
	'Power Nap',
	'Practical jokes',
	'Pressed flower craft',
	'Proofreading and editing',
	'Proverbs',
	'Public speaking',
	'Puppetry',
	'Puzzles',
	'Pyrography',
	'Quilling',
	'Quilting',
	'Quizzes',
	'Radio-controlled model playing',
	'Rail transport modeling',
	'Rapping',
	'Reading',
	'Recipe creation',
	'Refinishing',
	'Reiki',
	'Reviewing Gadgets',
	'Robot combat',
	'Rubik"s Cube',
	'Scrapbooking',
	'Scuba Diving',
	'Sculpting',
	'Sewing',
	'Shoemaking',
	'Singing',
	'Sketching',
	'Skipping rope',
	'Slot car',
	'Soapmaking',
	'Social media',
	'Spreadsheets',
	'Stamp collecting',
	'Stand-up comedy',
	'Storytelling',
	'Stretching',
	'Stripping',
	'Sudoku',
	'Talking',
	'Tapestry',
	'Tarot',
	'Tatebanko or diorama',
	'Tattooing',
	'Taxidermy',
	'Telling jokes',
	'Thrifting',
	'Upcycling',
	'Video editing',
	'Video game developing',
	'Video gaming',
	'Video making',
	'VR Gaming',
	'Wargaming',
	'Watch making',
	'Watching documentaries',
	'Watching movies',
	'Watching television',
	'Wax sealing',
	'Waxing',
	'Weaving',
	'Webtooning',
	'Weight training',
	'Welding',
	'Whisky',
	'Whittling',
	'Wikipedia editing',
	'Wine tasting',
	'Winemaking',
	'Witchcraft',
	'Wood carving',
	'Woodworking',
	'Word searches',
	'Worldbuilding',
	'Writing',
	'Writing music',
	'Yo-yoing',
	'Yoga',
	'Zumba',
];

export default function MediaCard() {
	const [personName, setPersonName] = React.useState<string[]>([]);

	const handleChange = (event: SelectChangeEvent<typeof personName>) => {
		const {
			target: { value },
		} = event;
		setPersonName(
			// On autofill we get a stringified value.
			typeof value === 'string' ? value.split(',') : value
		);
	};
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				alignSelf: 'center',
				flexDirection: 'column',
			}}
		>
			<Card
				sx={{
					maxWidth: 500,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					alignSelf: 'center',
					flexDirection: 'column',
					pt: 2,
				}}
			>
				<CardMedia
					component="img"
					height="200"
					image=""
					alt="cover photo"
				/>
				<CardContent></CardContent>
				<CardActions>
					<Button size="small">
						<AddAPhotoIcon />
					</Button>
					<Button size="small">
						<DeleteIcon />
					</Button>
				</CardActions>
			</Card>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<TextField
					sx={{
						p: 2,
						width: 300,
					}}
					id="outlined-multiline-static"
					multiline
					rows={2}
					placeholder="About yourself"
				/>
				<Button>
					<SaveIcon />
				</Button>
			</Box>

			<Box>
				<Typography variant="inherit" color="initial">
					Add your Hobbies from the list below :
				</Typography>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						alignSelf: 'center',
						flexDirection: 'row',
					}}
				>
					<FormControl sx={{ m: 1, width: 300 }}>
						<InputLabel id="demo-multiple-checkbox-label">
							✓
						</InputLabel>
						<Select
							labelId="demo-multiple-checkbox-label"
							id="demo-multiple-checkbox"
							multiple
							value={personName}
							onChange={handleChange}
							input={<OutlinedInput label="Tag" />}
							renderValue={selected => selected.join(', ')}
							MenuProps={MenuProps}
						>
							{hobbies.map(name => (
								<MenuItem key={name} value={name}>
									<Checkbox
										checked={personName.indexOf(name) > -1}
									/>
									<ListItemText primary={name} />
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<Button>
						<SaveIcon />
					</Button>
				</Box>
			</Box>

			<Box>
				<Typography variant="inherit" color="initial">
					Can' find your Hobby? write below :
				</Typography>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						alignSelf: 'center',
						flexDirection: 'row',
					}}
				>
					<FormControl sx={{ m: 1, width: 300 }}>
						<TextField
							sx={{
								p: 2,
								width: 300,
							}}
							id="outlined-multiline-static"
							rows={1}
							placeholder="Add Hobby"
						/>
					</FormControl>
					<Button>
						<SaveIcon />
					</Button>
				</Box>
			</Box>
		</Box>
	);
}
