import { NEWS_LOADING, NEWS_SUCCESS, NEWS_ERROR } from "./types"

const initialState = {
    data: [],
    access: false,
    loading: true,
    error: null,
}


export const newsDataReduser = (state = initialState, { type, payload }) => {
    switch (type) {
        case NEWS_LOADING:
            return { ...state, loading: true }
        case NEWS_SUCCESS:
            return { ...state, loading: false, access: true, data: payload }
        case NEWS_ERROR:
            return { ...state, loading: false, access: false, error: payload }
        default:
            return state
    }

}
