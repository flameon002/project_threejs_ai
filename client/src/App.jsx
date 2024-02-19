import Canvas from './canvas';
import NavBar from './components/Navbar';
import Customizer from './pages/Customizer';
import Home from './pages/Home';

function App() {
  return (
    <main className="app transition-all ease-in bg-slate-500">
      <NavBar/>
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App
