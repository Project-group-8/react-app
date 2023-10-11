import './App.css';
import Header from './header';
import Slideshow from './sliedshow';
import Main from './main';
import image1 from './media/one.png';


function App() {
const images =[image1,'https://images.deliveryhero.io/image/talabat/Menuitems/mmw_638173650719745568?width=172&amp;height=172','']

  return (
  <>
  <Header />
  <Slideshow images={images} />
  <Main/>
  </>
  );
}

export default App;
