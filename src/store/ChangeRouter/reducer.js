import { CHANGE_ROUTER } from "./type";

const initialState = {
    routerData: "user",
};

export const changeRouter = (state = initialState, { type, payload }) => {
    switch (type) {
        case CHANGE_ROUTER:
            return {...state, routerData: payload };
        default:
            return state;
    }
};