import { GET_PROFILE, PROFILE_ERROR } from '../actions/types'

const initialState = {
    profile: null,
    profiles: [],
    repos: [],
    loading : true,
    errors : {}
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            }

        case PROFILE_ERROR:
            return {
                ...state,
                errors: payload,
                loading: false
            }

        default:
            return state
    }
}