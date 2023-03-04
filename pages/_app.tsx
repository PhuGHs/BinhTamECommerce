import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.css';
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout/Layout'
import { Provider } from 'react-redux';
import store from '@/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}


