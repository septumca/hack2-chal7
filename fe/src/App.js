import './App.css';
import ItemProvider from './context/ItemProvider';
import AppRouter from './router/Router';

function App() {
  return (
    <div className="App">
      <ItemProvider>
        <AppRouter />
      </ItemProvider>
    </div>
  );
}

export default App;
