import React from 'react';
import About from './About';
import { shallow } from 'enzyme';
import { faItalic } from '@fortawesome/free-solid-svg-icons';

describe('<About />', function() {
    it('Renders About component', function() {
        const wrapper = shallow(<About />);
        expect(wrapper).toBeTruthy();
    });
    it('Checks for HTML changes', function() {
        const wrapper = shallow(<About />);
        expect(wrapper).toMatchSnapshot();
    });
});