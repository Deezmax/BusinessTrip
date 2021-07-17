import React from 'react';
import { withRouter } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './decorator.scss';

export function Decorator(props: any) {
  const { children } = props;
  return (
    <React.Fragment>
      <div id="wrapper">
        <Header />
        <div className="decorator">{children}</div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default withRouter(Decorator);
