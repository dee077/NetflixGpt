import { Provider } from 'react-redux';
import Body from './components/pages/Body';
import appStore from './components/store/appStore';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider store={appStore}>
      <Body />
      <ToastContainer />
    </Provider>
  );
}

export default App;
