import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
import toJson from "enzyme-to-json";

describe('<Button />', () => {
  it('should be an button element', () => {
    const props = {
      name: 'Get',
      onClick: jest.fn()
    };

    const wrapper = shallow(<Button {...props} />);
    const changeEvent = {userName: 'facebook', repoName: 'react'};
    expect(props.onClick).not.toBeCalled();
    wrapper.simulate('click', changeEvent);
    expect(props.onClick).toBeCalledWith(changeEvent);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

})