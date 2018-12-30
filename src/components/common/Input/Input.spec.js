import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';
import toJson from "enzyme-to-json";

describe('<Input />', () => {
  it('should be an input element with given id', () => {
    const props = {
      id: 'repoName',
      placeholder: 'Please enter repo name',
      type: 'text',
      size: '30'
    };

    const wrapper = shallow(<Input {...props} />);
    const inputBox = wrapper.find('#'+ props.id);
    expect(inputBox.length).toEqual(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

})