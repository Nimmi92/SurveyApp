import React from 'react';
import { shallow } from 'enzyme';
import Anchor from './Anchor';
import toJson from "enzyme-to-json";

describe('<Anchor />', () => {
  it('should be an anchor tag', () => {
    const props = {
      href: 'www.google.com',
      linkText: 'Google',
      onClick: jest.fn()
    };

    const wrapper = shallow(<Anchor {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

})