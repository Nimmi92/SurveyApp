import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';
import toJson from "enzyme-to-json";

describe('<Input />', () => {
  it('should be an input element', () => {
    const props = {
      placeholder: 'Please enter repo name',
      type: 'text',
      size: '30'
    };

    const wrapper = shallow(<Input {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

})