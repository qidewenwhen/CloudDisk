const Api = {
    BASE_API: 'http://localhost:5000',

    login(email, password) {
        return fetch(this.BASE_API + '/login', {
            method: 'POST',
            body: JSON.stringify({email: email, password: password}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
    },

    auth(token) {
        return fetch(this.BASE_API + '/auth', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': token
            }
        });
    },

    getFolders() {
        return fetch(this.BASE_API + '/folders', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
    },

    addFolder(name) {
        return fetch(this.BASE_API + '/folders', {
            method: 'POST',
            body: JSON.stringify({name: name}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    },

    getFolder(name) {
        return fetch(this.BASE_API + '/folders/' + name, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
    },

    deleteFolder(name) {
        return fetch(this.BASE_API + '/folders/' + name, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        });
    }
}

export default Api;