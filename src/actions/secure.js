const loginRequest = (obj) => {
    return {
        type: 'LOGIN_REQUEST',
        obj
    };
}

const loginRequestComplete = (userInfo) => {
    return {
        type: 'LOGIN_REQUEST_COMPLETE',
        userInfo
    };
}

const loginRequestFail = (err) => {
    return {
        type: 'LOGIN_REQUEST_FAILED',
        err
    };
}

const login = (obj, hashHistory) => {
    return dispatch => {
        dispatch(loginRequest(obj));
        loginRequestComplete()
        return fetch('/rest/auth/loginUser', {
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
            },
            credentials: credentials,
            method: 'POST',
            body: JSON.stringify(obj)
        }).then(response => response.json())
            .then(data => {
                if (!data.errorCode) {
                    dispatch(loginRequestComplete(data));
                    hashHistory.push('ETH/BTC/trade')
                } else {
                    dispatch(loginRequestFail(data.errorCode))
                }
            })
    }
}

const registerRequest = (obj) => {
    return {
        type: 'REGISTER_REQUEST',
        obj
    };
}

const registerRequestComplete = (data) => {
    return {
        type: 'REGISTER_REQUEST_COMPLETE',
        data
    };
}

const registerRequestFail = (err) => {
    return {
        type: 'REGISTER_REQUEST_FAILED',
        err
    };
}

const register = (obj) => {
    return dispatch => {
        dispatch(registerRequest(obj));
        return fetch('/rest/auth/createUser', {
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(obj)
        }).then(response => response.json())
          .then(data => {
                if (!data.errorCode) {
                    dispatch(registerRequestComplete(data));
                } else {
                    dispatch(registerRequestFail(data.errorCode))
                    throw new Error(`Registration failed: ${data.errorCode}`)
                }
          })
    }
}

const logout = (hashHistory) => {
    hashHistory.push('/ETH/BTC/trade')

    return {
        type: 'LOGOUT'
    }
}

export {
    loginRequestComplete,
    loginRequestFail,
    login,
    registerRequestComplete,
    registerRequestFail,
    register,
    logout,
}