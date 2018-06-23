// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Home from './index';

// Tests
describe('screens/main/Home', () => {
  it('should render without crashing', () => {
    shallow(<Home />);
  });
});
