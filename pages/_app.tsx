import 'bootstrap/dist/css/bootstrap.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import '../styles/global.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout/Layout'
import { Provider } from 'react-redux';
import Store from '@/store';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={Store}>
      <Layout>
        <ToastContainer autoClose={1500} limit={3}/>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}


