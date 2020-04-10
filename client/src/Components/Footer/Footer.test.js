import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';

describe('<Footer />', function() {
    it('Renders Footer component', function() {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toBeTruthy();
    });
    it('Checks for HTML changes', function() {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toMatchSnapshot();
    });
});