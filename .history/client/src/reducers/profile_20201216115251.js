import { GET_PROFILE, PROFILE_ERROR } from '../actions/types'

initialState = {
    profile: null,
    profiles: [],
    repos: [],
    loading : true,
    errors = {}
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {

    }
}