const initialState = {
    posts: [],
    post: {}
}
export default (state=initialState, action) => {
    switch (action.type) {
        case 'LOAD_POSTS' :
        return {
            ...state,
          posts: action.payload
        }
        case 'VIEW_POST':
        return {
            ...state,
          post: action.payload
        }
        // case 'CLAP_POST':
        // let article = Object.assign({}, state.article)
        // article.claps++
        // console.log(article)
        // return {
        //     ...state,
        //     article: article
        // }
        default:
            return state
    }
}
