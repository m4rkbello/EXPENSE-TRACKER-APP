import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Ohaha } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/Store.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
      <Ohaha>
        <App />
      </Ohaha>
    </Provider>


)
