// @flow
// Module dependencies
import * as React from 'react';

import { Column, Container, Row } from 'components/common/Grid';

// Styles
import './styles.scss';

// Types
type Return = React.Node;

// Component
const Header = (): Return => (
  <header styleName="container">
    <Container>
      <Row>
        <Column>
          <div styleName="brand">Setup React App</div>
        </Column>
      </Row>
    </Container>
  </header>
);

// Module exports
export default Header;
