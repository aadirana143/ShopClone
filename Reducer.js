const initialState = {
    Cart: [],
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADDDATA':
            let tempdata = state.Cart
            tempdata.push(action.payload)
            return {
                ...state,
                Cart: tempdata
            }
        case 'REMOVE':
            let temps = state.Cart
            const filtervalue = temps.filter((cur, index) => {
                return action.payload != cur.id
            })
            return {
                ...state,
                Cart: filtervalue
            }
        default: return state
    }
}