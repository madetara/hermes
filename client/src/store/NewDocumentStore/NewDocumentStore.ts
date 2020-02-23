import { INewDocument } from './typings';

const state = {
    newDocument: null
};

const getters = {

};
const mutations = {
    createNewDocument(state, payload: INewDocument) {
        state.newDocument = payload;
    }
};

const actions = {
    createNewDocument: (context, payload: INewDocument) => {
        context.commit("createNewDocument", payload);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}