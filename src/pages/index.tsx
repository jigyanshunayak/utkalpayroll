

import { Provider } from "react-redux";
import Login from "./LogIn";

import store from '../redux/store';
export default function Dashboard() {
  return (
    
    <Provider store={store}>

      <Login/>
    </Provider>
      
   
  );
}
