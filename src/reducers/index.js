import { ACTIONS, moveObjects } from "../actions";

const initialState = {
    angle: 45,
};

function reducer(state=initialState, action) {
    switch (action.type) {
        case ACTIONS.MOVE_OBJECTS:
            return moveObjects(state, action);
        default:
            return state;
    }
}

export default reducer;