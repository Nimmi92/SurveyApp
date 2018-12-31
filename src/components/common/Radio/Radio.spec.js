import React from 'react';
import { shallow } from 'enzyme';
import Radio from './Radio';
import toJson from "enzyme-to-json";

describe('<Radio />', () => {
  it('should be an radio button', () => {
    const props = {
      name: 'gender',
      options: ['select','one','two'],
      onChange: jest.fn()
    };

    const wrapper = shallow(<Radio {...props} onChange={props.onChange}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

})