import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';
import userService from '../services/user-service';

describe('<Login />', function() {
    it('Renders Login component', function() {
        const wrapper = shallow(<Login />);
        expect(wrapper).toBeTruthy();
    });
    it('Checks for HTML changes', function() {
        const wrapper = shallow(<Login />);
        expect(wrapper).toMatchSnapshot();
    });
    it('Logs in user successfully', function() {
        const history = { push: () => {} };
        const historyPushSpy = jest.spyOn(history, 'push');
        const loginSpy = jest.spyOn(userService, 'login').mockImplementationOnce(() => Promise.resolve());

        const wrapper = shallow(<Login history={history} />);
        wrapper.find('button').simulate('click');

        expect(loginSpy).toHaveBeenCalledTimes(1);
        
        Promise.resolve().then((done) => {
            expect(historyPushSpy).toHaveBeenCalledTimes(1);
            done();
        });
    });
});