// @flow
// Module dependencies
import * as React from 'react';
import { Link } from 'react-router-dom';

import ExLink from 'components/common/ExLink';
import Layout from 'components/common/Layout';
import { Body, Document, Head, Title } from 'components/common/Page';

// Constants
import URLs from 'constants/router/urls';

// Styles
import './styles.scss';

// Types
type Return = React.Node;

// Component
const Home = (): Return => (
  <Document>
    <Head>
      <Title>Setup React App</Title>
    </Head>
    <Body>
      <Layout>
        <h2 className="headline">Setup React App</h2>
        <p>
          A minimal React &amp; Redux boilerplate with best practices bootstrapped with{' '}
          <ExLink to="https://github.com/facebookincubator/create-react-app">
            Create React App
          </ExLink>. It can save you a lot of time and energy searching for highly scalable
          solutions with a nice development experience to get started.
        </p>
        <div styleName="footnote">
          <div className="button-wrapper">
            <ExLink styles="btn btn-primary btn-sm" to={`https://github.com/${URLs.repo}`}>
              View on GitHub
            </ExLink>
            <Link className="btn btn-secondary btn-sm" to="/404">
              404
            </Link>
          </div>
        </div>
      </Layout>
    </Body>
  </Document>
);

// Module exports
export default Home;
