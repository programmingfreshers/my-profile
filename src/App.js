import Chatbot from './chatbot/Chatbot';
import './App.css';
import Navbar from './components/Navbar';


function App() {
  document.body.style.backgroundImage = 'image.png';
  return (
    <>
      <Navbar/>
      <Chatbot/>
    </>
  );
}

export default App;
