import React from 'react';
import Delete from './Delete';
import { shallow } from 'enzyme';
import posterService from '../services/post-service';

describe('<Delete />', function() {
    it('Renders Delete component', function() {
        const wrapper = shallow(<Delete />);
        expect(wrapper).toBeTruthy();
    });
})