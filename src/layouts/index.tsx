import React from 'react';
import { Footer } from 'components/Footer';

import Search from 'components/Search'
import './layout.scss';
import logoBlack from 'static/logo-black.svg';
//import logoWhite from 'static/logo-white.svg';

const Layout: React.FC = ({children}) => {
  return (
    <>
      <header className="masthead mb-auto">
        <div className="inner">
          <img src={logoBlack} alt='logo' />
          <Search />
        </div>
      </header>

      <main className="main inner cover">
        {children}
      </main>
      <Footer/>
    </>
  );
}

export default Layout;
