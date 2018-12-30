import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';
import toJson from "enzyme-to-json";


describe('<Loader />', () => {
  it('should be an loader element', () => {
    const wrapper = shallow(<Loader />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

})