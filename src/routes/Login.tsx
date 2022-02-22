import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const ValidationTextFields = () => {
	return (
		<Container maxWidth="xs">
			<Box
				component="form"
				sx={{
					'& .MuiTextField-root': { m: 1, width: '25ch' },
					border: 'solid',
					borderBlockColor: 'black',
					height: 'auto',
					width: 'center',
					p: 2,
					borderRadius: 5,
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
					<TextField
						//id="standard-error"
						label="E-mail"
						defaultValue=""
						variant="standard"
					/>
					<TextField
						//id="standard-error-helper-text"
						label="Password"
						type="password"
						defaultValue=""
						//helperText="Incorrect entry."
						variant="standard"
					/>
					<Button variant="contained">Login</Button>
				</Box>
			</Box>
		</Container>
	);
};

export default ValidationTextFields;
