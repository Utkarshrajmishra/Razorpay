import './App.css'
import SideNav from './components/SideNav'
import Home from './components/Home'
function App() {
  
  return (
    <>
      <div className='flex'>
        <SideNav />
        <Home/>
      </div>
    </>
  );
}

export default App
