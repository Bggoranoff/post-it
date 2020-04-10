import React from 'react';
import Poster from './Poster';
import { shallow } from 'enzyme';

describe('<Poster />', function() {
    it('Renders Poster component', function() {
        const wrapper = shallow(<Poster />);
        expect(wrapper).toBeTruthy();
    });
    it('Checks for HTML changes', function() {
        const wrapper = shallow(<Poster />);
        expect(wrapper).toMatchSnapshot;
    });
})