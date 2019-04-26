import PropTypes from 'prop-types';
import React from 'react';
import { Button, Editor } from '@lt/components';
import UIGlobalStyles from '@lt/components/styles';
import styled from 'styled-components';

import GlobalStyles from './styles';

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