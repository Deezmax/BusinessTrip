import React from 'react';
import { withRouter } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export function Decorator(props: any) {
  const { children } = props;
  console.log(children);
  return (
    <React.Fragment>
      <div id="wrapper">
        <Header />
        {children}
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default withRouter(Decorator);
