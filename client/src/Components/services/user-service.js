const userService = {
    register: function(data) {
        return fetch('http://localhost:9999/api/user/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json());
    },
    login: function(data) {
        return fetch('http://localhost:9999/api/user/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        }).then(res => res.status === 200 ? res.json() : res.text());
    },
    logout: function() {
        return fetch('http://localhost:9999/api/user/logout', {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.text());
    }
};

export default userService;