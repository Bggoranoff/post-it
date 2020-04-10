import React from 'react';
import CreatePoster from './CreatePoster';
import { shallow } from 'enzyme';
import posterService from '../../services';

describe('<CreatePoster />', function() {
    it('Renders CreatePoster component', function() {
        const wrapper = shallow(<CreatePoster />);
        expect(wrapper).toBeTruthy();
    });
    it('Checks for HTML changes', function() {
        const wrapper = shallow(<CreatePoster />);
        expect(wrapper).toMatchSnapshot();
    });
    it('Creates a poster successfully', function(done) {
        const history = { push: () => {} };
        const historyPushSpy = jest.spyOn(history, 'push');
        const createPosterSpy = jest.spyOn(posterService, 'create').mockImplementationOnce(() => Promise.resolve());

        const wrapper = shallow(<CreatePost history={history} />);
        wrapper.find('button').simulate('click');

        expect(createPosterSpy).toHaveBeenCalledTimes(1);
        Promise.resolve().then(() => {
            expect(historyPushSpy).toHaveBeenCalledTimes(1);
            done();
        });
    });
});