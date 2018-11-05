import _ from 'lodash';
import * as commentTypes from '../actions/comments/types';

// common
export const isLoading = (state, requestId) => state.app.isLoading.entities[requestId];

export const posts = state => _.get(state, 'posts.posts.items', null);
export const post = (state, id) => state.posts.posts.items[id];
export const activePost = state => _.get(state, 'posts.activePost', null);
export const comments = (state, postId) => _.get(state, `comments.comments[${postId}]`, null);
export const commentsCount = (state, postId) => _.get(state, `comments.comments[${postId}].count`, null);

// Errors
export const signInError = state => state.auth.signinError;
export const signUpError = state => state.auth.signupError;
export const isLoggedIn = state => state.auth.isLoggedIn;
export const isStartSession = state => state.auth.isStartSession;

// Loading
export const isLoadingCreateComment = state => state.app.isLoading.entities[commentTypes.CREATE_COMMENT.SUCCESS];
