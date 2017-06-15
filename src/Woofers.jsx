import path from 'path';
import React from 'react';
import Loadable from 'react-loadable';

function MyLoadingComponent({ error }) {
  if (error) {
    return <div>Error!</div>;
  } else {
    return <div>Loading...</div>;
  }
}

function fakeDelay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

const LoadableWooferImages = Loadable({
  loader: () => fakeDelay(500).then(() => import('./WooferImages')),
  LoadingComponent: MyLoadingComponent
});

class Woofers extends React.Component {
  render() {
    return <LoadableWooferImages/>;
  }
}

export default Woofers;