import _ from 'lodash';


export const posts = state => _.get(state, 'posts.posts.items', null);
export const post = (state, id) => state.posts.posts.items[id];
export const activePost = state => _.get(state, 'posts.activePost', null);
export const comments = (state, postId) => _.get(state, `comments.comments[${postId}]`, null);
export const commentsCount = (state, postId) => _.get(state, `comments.comments[${postId}].count`, null);

// Errors
export const signInError = state => state.auth.signinError;
export const signUpError = state => state.auth.signupError;

// Loading
