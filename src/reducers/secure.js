const userReducer = (state = {name: '56666'}, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            let user = {name: 'logined user'}
            return user
        case 'LOGIN_REQUEST_COMPLETE':
            return { ...action.userInfo }
        case 'LOGIN_REQUEST_FAILED': {
            let newState = { ...initialState }
            newState.err = action.err
            return newState
        }
        case 'REGISTER_REQUEST_COMPLETE':
            return { ...action.data }
        case 'REGISTER_REQUEST_FAILED': {
            let newState = { ...initialState }
            newState.err = action.err
            return newState
        }
        case 'PROFILE_GET_CURRENT_USER':
            return { ...action.userInfo }
        case 'LOGOUT':
            return {}
        default:
            return state
    }
}

const UserReducer = {
    user: userReducer
}

export default UserReducer;