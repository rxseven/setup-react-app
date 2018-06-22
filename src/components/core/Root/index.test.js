// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Root from './index';

// Tests
describe('components/core/Root', () => {
  it('should render without crashing', () => {
    shallow(<Root />);
  });
});
