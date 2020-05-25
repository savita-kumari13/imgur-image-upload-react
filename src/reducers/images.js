const initialState = []

export const images = (state = initialState, action) => {
    const {payload} = action
    switch(action.type) {
        case 'ADD_IMAGE':
            return [...state, ...payload]
        default:
            return state
    }
}