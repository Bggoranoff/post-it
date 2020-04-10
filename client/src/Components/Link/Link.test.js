import React from 'react';
import Link from './Link';
import { shallow } from 'enzyme';
import { faItalic } from '@fortawesome/free-solid-svg-icons';

describe('<Link />', function() {
    it('Renders Link component', function() {
        const wrapper = shallow(<Link />);
        expect(wrapper).toBeTruthy();
    });
    it('Checks for HTML changes', function() {
        const wrapper = shallow(<Link />);
        expect(wrapper).toMatchSnapshot();
    });
});