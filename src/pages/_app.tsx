// pages/_app.tsx
import "@/src/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from 'react-redux';
import store from "../redux/store"; // Adjust the path to your store file

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
