import Header from './components/Header';
import MainBanner from './components/MainBanner';
// import LatestProducts from './components/LatestProducts';
import { BrowserRouter as Router } from 'react-router-dom'
function App() {

  return (
    <>
      <Router>
        <Header />
        <MainBanner />
        {/* <LatestProducts /> */}
      </Router>
    </>
  );
}

export default App;
