import {Container, CssBaseline, Typography, Toolbar} from '@mui/material';
import Header from "./Header";
import Insurance from './Insurance';

export default function Home() {
  return (
    <>
      <CssBaseline />
        <Header />
      <Toolbar />
      <Container>
        <Typography variant="h5" component="div" sx={{my:6}}>
            Insurance Packages
        </Typography>
        <Insurance />
      </Container>
    </>
  );
}
