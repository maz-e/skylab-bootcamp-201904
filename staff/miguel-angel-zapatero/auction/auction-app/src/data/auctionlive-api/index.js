import validate from 'auction-validate'
import call from 'auction-call'

const { REACT_APP_HEROKU_URL, REACT_APP_PORT } = process.env

const auctionLiveApi = {
    __url__: `http://localhost:${REACT_APP_PORT}/api`,
    // __url__: REACT_APP_HEROKU_URL,
    __timeout__: 0,

    registerUser(name, surname, email, password) {
        validate.arguments([
            { name: 'name', value: name, type: String, notEmpty: true },
            { name: 'surname', value: surname, type: String, notEmpty: true },
            { name: 'email', value: email, type: String, notEmpty: true },
            { name: 'password', value: password, type: String, notEmpty: true },
        ])

        validate.email(email)

        return call(`${this.__url__}/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: { name, surname, email, password },
            timeout: this.__timeout__
        })
    },

    authenticateUser(email, password) {
        validate.arguments([
            { name: 'email', value: email, type: String, notEmpty: true },
            { name: 'password', value: password, type: String, notEmpty: true }
        ])

        validate.email(email)

        return call(`${this.__url__}/users/auth`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: { email, password },
            timeout: this.__timeout__
        })
    },

    retrieveUser(token) {
        validate.arguments([
            { name: 'token', value: token, type: String, notEmpty: true }
        ])

        return call(`${this.__url__}/users`, {
            headers: { Authorization: `Bearer ${token}` },
            timeout: this.__timeout__
        })
    },

    updateUser(token, data) {
        validate.arguments([
            { name: 'token', value: token, type: String, notEmpty: true },
            { name: 'data', value: data, type: Object, notEmpty: true }
        ])

        return call(`${this.__url__}/users/update`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: data,
            timeout: this.__timeout__
        })
    },

    deleteUser(token, email, password) {
        validate.arguments([
            { name: 'token', value: token, type: String, notEmpty: true },
            { name: 'email', value: email, type: String, notEmpty: true },
            { name: 'password', value: password, type: String, notEmpty: true }
        ])

        return call(`${this.__url__}/users/delete`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: { email, password },
            timeout: this.__timeout__
        })
    },

    retrieveUserItemsBids(token) {
        validate.arguments([
            { name: 'token', value: token, type: String, notEmpty: true }
        ])

        return call(`${this.__url__}/users/items/bids`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            timeout: this.__timeout__
        })
    },

    placeBid(itemId, token, amount) {
        validate.arguments([
            { name: 'itemId', value: itemId, type: String, notEmpty: true },
            { name: 'token', value: token, type: String, notEmpty: true },
            { name: 'amount', value: amount, type: Number, notEmpty: true }
        ])

        return call(`${this.__url__}/items/${itemId}/bids`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: { amount },
            timeout: this.__timeout__
        })
    },

    retrieveItemBids(itemId, token){
        validate.arguments([
            { name: 'itemId', value: itemId, type: String, notEmpty: true },
            { name: 'token', value: token, type: String, notEmpty: true }
        ])

        return call(`${this.__url__}/items/${itemId}/bids`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            timeout: this.__timeout__
        })
    },

    searchItems(data) {
        validate.arguments([
            { name: 'data', value: data, type: Object, optional: true}
        ])

        const {query, city, category, startDate, endDate, startPrice, endPrice} = data

        let queryString = ''
        if(query) queryString += `query=${query}`
        if(city) queryString += `&city=${city}`
        if(category) queryString += `&category=${category}`
        if(startDate && endDate) queryString += `&startDate=${startDate}&endDate=${endDate}`
        if(startPrice && endPrice) queryString += `&startPrice=${startPrice}&endPrice=${endPrice}`
        
        return call(`${this.__url__}/items?${queryString}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: this.__timeout__
        })
    },
    
    retrieveItem(itemId, token) {
        validate.arguments([
            { name: 'itemId', value: itemId, type: String, notEmpty: true},
            { name: 'token', value: token, type: String, notEmpty: true }
        ])
        
        return call(`${this.__url__}/items/${itemId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            timeout: this.__timeout__
        })
    },

    retrieveCities() {
        return call(`${this.__url__}/cities`, {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: this.__timeout__
        })
    },

    retrieveCategories() {
        return call(`${this.__url__}/categories`, {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: this.__timeout__
        })
    }
}

export default auctionLiveApi