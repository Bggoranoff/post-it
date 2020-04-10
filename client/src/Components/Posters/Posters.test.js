import React from 'react';
import Posters from './Posters';
import shallow from 'enzyme';

describe('<Posters />', function() {
    it('Renders Posters component', function() {
        const wrapper = shallow(<Posters />);
        expect(wrapper).toBeTruthy();
    });
    it('Checks for HTML changes', function() {
        const wrapper = shallow(<Posters />);
        expect(wrapper).toMatchSnapshot();
    });
});