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
    }
}

export default Api;