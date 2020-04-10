import React from 'react';
import Profile from './Profile';
import { shallow } from 'enzyme';

describe('<Profile />', function() {
    it('Renders Profile component', function() {
        const wrapper = shallow(<Profile />);
        expect(wrapper).toBeTruthy();
    });
    it('Checks for HTML changes', function() {
        const wrapper = shallow(<Profile />);
        expect(wrapper).toMatchSnapshot();
    });
});