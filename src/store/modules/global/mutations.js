export default {
    setAxiosLoading(state, loading) {
        state.axiosLoading = loading
    },
    setCachedInclude(state, payload){
        state.cachedInclude.push(payload)
    },
    setCachedExclude(state, payload){
        state.cachedExclude.push(payload)
    },
    removeCachedInclude(state, payload){
        state.cachedInclude = state.cachedInclude.filter(item => item !== payload)
    },
    removeCachedExclude(state,payload){
        state.cachedExclude = state.cachedExclude.filter(item => item !== payload)
    }
}
