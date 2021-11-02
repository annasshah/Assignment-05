import './App.css';


import SliderMainSection from './components/SliderMainSection';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AfterSliderMain from './components/AfterSliderMain';
import { Box } from '@mui/system';

function App() {

  return (
    <>
    <Box sx={{backgroundColor:'#f2f3f7',height:'100%'}}>


      <Navbar />
      
      <SliderMainSection/>

      <AfterSliderMain/>
  

    </Box>
    </>
  );
}

export default App;
