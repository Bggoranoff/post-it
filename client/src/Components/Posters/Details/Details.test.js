import React from 'react';
import Details from './Details';
import posterService from '../../services/post-service';
import { shallow } from 'enzyme';


describe('<Details />', function() {
    it('Renders Details component', function() {
        const wrapper = shallow(<Details />);
        expect(wrapper).toBeTruthy();
    });
    it('Checks for HTML changes', function() {
        const wrapper = shallow(<Details />);
        expect(wrapper).toMatchSnapshot();
    });
    it('Loads the post details successfully', function(done) {
        const loadPosterSpy = jest.spyOn(posterService, 'load');
        expect(loadPosterSpy).toHaveBeenCalledTimes(1);
        done();
    });
});