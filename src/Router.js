import React from 'react';
import { BrowserRouter, StaticRouter } from 'react-router-dom';

function Router(props) {
  if (typeof window !== 'undefined' && window.document && window.document.createElement) {
    return (
      <BrowserRouter>
        {props.children}
      </BrowserRouter>
    );
  }

  return (
    <StaticRouter location={props.path} context={{}}>
      {props.children}
    </StaticRouter>
  );
}

export default Router;
