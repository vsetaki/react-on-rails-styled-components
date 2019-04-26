import PropTypes from 'prop-types';
import React from 'react';
import { Button, Editor, Badge } from '@lt/components';
import UIGlobalStyles from '@lt/components/styles';
import styled from 'styled-components';

import GlobalStyles from './styles';
import ComponentWithSCSS from './ComponentWithSCSS';

export default class TestComponent extends React.Component {
  render() {
    return (
      <StyledContainer>
        <UIGlobalStyles />
        <GlobalStyles />
        <h1>Example editor</h1>
        <p>Level Travel UI components with Styled Components and SSR using React On Rails</p>
        <StyledEditor>
          <Editor
            shadow
            defaultValue="__Formatted__ [text](#) example."
          />
        </StyledEditor>
        <Button primary onClick={() => alert('Submitted')}>Submit</Button>
        <StyledHr />
        <h2>Component from @lt/components</h2>
        <Badge primary>test</Badge>
        <h2>Component with SCSS</h2>
        <ComponentWithSCSS />
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.div`
  width: 500px;
  margin: 20px auto;
`;

const StyledEditor = styled.div`
  margin-bottom: 15px;
`;

const StyledHr = styled.hr`
  margin-bottom: 15px;
  margin-top: 15px;
`;