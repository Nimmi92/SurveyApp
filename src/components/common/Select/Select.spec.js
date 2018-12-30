import React from 'react';
import { shallow } from 'enzyme';
import Select from './Select';
import toJson from "enzyme-to-json";

describe('<Select />', () => {
  it('should be an select box', () => {
    const props = {
      label: 'Filter by',
      options: ['select','one','two'],
      onChange: jest.fn()
    };

    const wrapper = shallow(<Select {...props} />);
    const selectBox = wrapper.find('select');
    expect(selectBox.length).toEqual(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

})