
import './App.css';
import CustomerDetails from './components/CustomerDetails/CustomerDetails';
import FoodTileContainer from './components/FoodTileContainer/FoodTileContainer';
import ItemTileContainer from './components/ItemTiles/ItemTileContainer';
import UpperNavBar from './components/NavBar/UpperNavBar';
import RecentOrdersContainer from './components/RecentOrders/RecentOrdersContainer';


function App() {
  return (
    <div className="App">
      <UpperNavBar/>
      <RecentOrdersContainer />
        <div className='center'>
          <FoodTileContainer />
          <ItemTileContainer/>
        </div>
        <div className="right">
        <CustomerDetails />
        </div>
        
      
   </div>
  );
}

export default App;
