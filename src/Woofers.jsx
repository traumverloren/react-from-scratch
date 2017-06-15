import path from 'path';
import React from 'react';
import Loadable from 'react-loadable';

function MyLoadingComponent({ error, pastDelay }) {
  if (error) {
    return <div>Error!</div>;
  } else if (pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}

function fakeDelay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

const LoadableWooferImages = Loadable({
  loader: () => fakeDelay(400).then(() => import('./WooferImages')),
  LoadingComponent: MyLoadingComponent,
  delay: 300
});

class Woofers extends React.Component {
  render() {
    return <LoadableWooferImages/>;
  }
}

export default Woofers;