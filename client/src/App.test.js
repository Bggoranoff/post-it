import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('<App />', function() {
    it('Renders App component', function() {
        const wrapper = shallow(<App />);
        expect(wrapper).toBeTruthy();
    });
    it('Checks for HTML changes', function() {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });
});
