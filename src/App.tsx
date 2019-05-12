import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux'
import Layout from 'layouts'

import Carousel from 'components/Carousel'

import { ApplicationState } from './store'

interface AppProps {
  store: Store<ApplicationState>
}


const App: React.FC<AppProps> = ({ store }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Carousel />
      </Layout>
    </Provider>
  );
}

export default App;
