const { createStore , combineReducers } = window.Redux


function appReducer(state = { count: 0 }, cmd) {
    
}

window.store = createStore(appReducer)
