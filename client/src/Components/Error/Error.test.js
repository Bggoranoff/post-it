import React from 'react';
import Error from './Error';
import { shallow } from 'enzyme';
import { faItalic } from '@fortawesome/free-solid-svg-icons';

describe('<Error />', function() {
    it('Renders Error component', function() {
        const wrapper = shallow(<Error />);
        expect(wrapper).toBeTruthy();
    });
    it('Checks for HTML changes', function() {
        const wrapper = shallow(<Error />);
        expect(wrapper).toMatchSnapshot();
    });
});
