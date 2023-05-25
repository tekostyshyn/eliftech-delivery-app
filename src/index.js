import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { store } from './redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/eliftech-delivery-app">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
