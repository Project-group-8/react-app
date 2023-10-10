import './App.css';
import Header from './header';
import Slideshow from './sliedshow';
import Main from './main';



function App() {
const images =['','','']

  return (
  <>
  <Header />
  <Slideshow images={images}/ >
    <Main />

  </>
  );
}

export default App;
