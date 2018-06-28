// @flow
// Module dependencies
import * as React from 'react';

import ExLink from 'components/common/ExLink';
import { Column, Container, Row } from 'components/common/Grid';

// Constants
import URLs from 'constants/router/urls';

// Styles
import './styles.scss';

// Types
type Return = React.Node;

// Component
const Footer = (): Return => (
  <footer styleName="container">
    <Container>
      <Row>
        <Column>
          <ul styleName="navigation">
            <li>
              <ExLink to={`https://github.com/${URLs.repo}`}>View on GitHub</ExLink>
            </li>
          </ul>
          <div styleName="ci-status">
            <div className="button-wrapper">
              <ExLink to={`https://travis-ci.org/${URLs.repo}`}>
                <img
                  alt="Build Status"
                  src={`https://travis-ci.org/${URLs.repo}.svg?branch=master`}
                />
              </ExLink>
              <ExLink to={`https://coveralls.io/github/${URLs.repo}?branch=master`}>
                <img
                  src={`https://coveralls.io/repos/github/${URLs.repo}/badge.svg?branch=master`}
                  alt="Coverage Status"
                />
              </ExLink>
            </div>
          </div>
          <div styleName="legal">
            <p>
              Designed &amp; built with all the love in{' '}
              <ExLink to="https://reactjs.org">React</ExLink> &amp;{' '}
              <ExLink to="https://redux.js.org">Redux</ExLink>.
            </p>
            <p>
              Copyright © 2018{' '}
              <ExLink to="https://github.com/rxseven">Theerawat Pongsupawat</ExLink>.
            </p>
          </div>
        </Column>
      </Row>
    </Container>
  </footer>
);

// Module exports
export default Footer;
