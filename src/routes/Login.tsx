import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ValidationTextFields = () => {
	return (
		<Box
			component="form"
			sx={{
				'& .MuiTextField-root': { m: 1, width: '25ch' },
			}}
			noValidate
			autoComplete="off"
		>
			<div>
				<TextField
					//id="standard-error"
					label="E-mail"
					defaultValue=""
					variant="standard"
				/>
				<TextField
					//id="standard-error-helper-text"
					label="Password"
					defaultValue=""
					//helperText="Incorrect entry."
					variant="standard"
				/>
				<Button variant="contained">Login</Button>
			</div>
		</Box>
	);
};

export default ValidationTextFields;
