import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Container from '@mui/material/Container';

const ValidationTextFields = () => {
	const [value, setValue] = React.useState<Date | null>(
		new Date('2022-02-22T17:34:54')
	);

	const handleChange = (newValue: Date | null) => {
		setValue(newValue);
	};

	return (
		<Container maxWidth="xs">
			<Box
				sx={{
					border: 'solid',
					borderBlockColor: 'black',
					height: 'auto',
					width: 'center',
					p: 2,
					borderRadius: 5,
				}}
			>
				<Box
					component="form"
					sx={{
						'& .MuiTextField-root': {
							m: 2,
							width: '25ch',
						},
					}}
					noValidate
					autoComplete="off"
				>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							alignSelf: 'center',
							flexDirection: 'column',
						}}
					>
						<Box>
							<h1>Register</h1>
						</Box>

						<TextField
							//id="standard-error"
							label="Name"
							defaultValue=""
							variant="standard"
						/>
						<TextField
							//id="standard-error-helper-text"
							label="Surname"
							defaultValue=""
							//helperText="Incorrect entry."
							variant="standard"
						/>

						<TextField
							//id="standard-error-helper-text"
							label="Email"
							defaultValue=""
							//helperText="Incorrect entry."
							variant="standard"
						/>

						<TextField
							//id="standard-error"
							label="Password"
							defaultValue=""
							type="password"
							variant="standard"
						/>
						<TextField
							//id="standard-error-helper-text"
							label="Repeat Password"
							defaultValue=""
							type="password"
							//helperText="Incorrect entry."
							variant="standard"
						/>

						<TextField
							id="date"
							label="date of birth"
							type="date"
							defaultValue="2000-01-01"
							sx={{ width: 220 }}
							InputLabelProps={{
								shrink: true,
							}}
						/>

						<FormControl>
							<FormLabel id="demo-radio-buttons-group-label">
								Gender
							</FormLabel>
							<RadioGroup
								row
								aria-labelledby="demo-radio-buttons-group-label"
								defaultValue="male"
								name="radio-buttons-group"
							>
								{' '}
								<FormControlLabel
									value="male"
									control={<Radio />}
									label="Male"
								/>
								<FormControlLabel
									value="female"
									control={<Radio />}
									label="Female"
								/>
							</RadioGroup>

							<Button variant="contained" type="submit">
								Signup
							</Button>
						</FormControl>
					</Box>
				</Box>
			</Box>
		</Container>
	);
};

export default ValidationTextFields;
