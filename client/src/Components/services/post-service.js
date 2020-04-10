const posterService = {
    load: function(id, limit) {
        return fetch(`http://localhost:9999/api/poster${id ? `/${id}` : ''}${limit ? `?limit=${limit}` : ''}`)
        .then(res => res.json());
    },
    create: function(data) {
        return fetch('http://localhost:9999/api/poster/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        })
        .then(res => res.json());
    },
    delete: function(id) {
        return fetch(`http://localhost:9999/api/poster/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        })
        .then(res => res.json());
    }
};

export default posterService;