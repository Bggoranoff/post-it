import React from 'react';
import Register from './Register';
import { shallow } from 'enzyme';
import userService from '../services/user-service';

describe('<Register />', function() {
    it('Renders Register component', function() {
        const wrapper = shallow(<Register />);
        expect(wrapper).toBeTruthy();
    });
    it('Checks for HTML changes', function() {
        const wrapper = shallow(<Register />);
        expect(wrapper).toMatchSnapshot();
    });
    it('Registers a user successfully', function(done) {
        const history = { push: () => {} };
        const historyPushSpy = jest.spyOn(history, 'push');
        const registerUserSpy = jest.spyOn(userService, 'register').mockImplementationOnce(() => Promise.resolve());

        const wrapper = shallow(<Register history={history} />);
        expect(registerUserSpy).toHaveBeenCalledTimes(1);
        Promise.resolve().then(() => {
            expect(historyPushSpy).toHaveBeenCalledTimes(1);
            done();
        });
    });
});