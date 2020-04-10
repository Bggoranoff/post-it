import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('<Header />', function() {
    it('Renders Header component', function() {
        const wrapper = shallow(<Header />);
        expect(wrapper).toBeTruthy();
    });
    it('Checks for HTML changes', function() {
        const wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
    });
});