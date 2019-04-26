import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import TestComponent from './TestComponent';

export default (props, _railsContext) => {
  if (_railsContext.serverSide) {
    const sheet = new ServerStyleSheet();
    const componentHtml = ReactDOMServer.renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        <TestComponent {...props} />
      </StyleSheetManager>
    )
    const componentCss = sheet.getStyleTags();
  
    return {
      renderedHtml: {
        componentHtml,
        componentCss,
      },
    };
  }

  return <TestComponent {...props} />;
};