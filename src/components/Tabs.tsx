import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs() {
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
						<Tab label="More" value="3" />
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
					Hghjhgj
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
				<TabPanel
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						alignSelf: 'center',
						flexDirection: 'column',
					}}
					value="3"
				>
					Moghjghjre
				</TabPanel>
			</TabContext>
		</Box>
	);
}
