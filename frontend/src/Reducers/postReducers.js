import { ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, CLEAR_ERRORS, CLEAR_MESSAGE, DELETE_COMMENT_FAILURE, DELETE_COMMENT_REQUEST, DELETE_COMMENT_SUCCESS, DELETE_POST_FAILURE, DELETE_POST_REQUEST, DELETE_POST_SUCCESS, DELETE_PROFILE_FAILURE, DELETE_PROFILE_REQUEST, DELETE_PROFILE_SUCCESS, FOLLOW_USER_FAILURE, FOLLOW_USER_REQUEST, FOLLOW_USER_SUCCESS, FORGOT_PASSWORD_FAILURE, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, GET_POSTS_FAILURE, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, LIKE_FAILURE, LIKE_REQUEST, LIKE_SUCCESS, MY_POSTS_FAILURE, MY_POSTS_REQUEST, MY_POSTS_SUCCESS, NEW_POST_FAILURE, NEW_POST_REQUEST, NEW_POST_SUCCESS, POST_OF_FOLLOWING_FAILURE, POST_OF_FOLLOWING_REQUEST, POST_OF_FOLLOWING_SUCCESS, RESET_PASSWORD_FAILURE, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, UPDATE_CAPTION_FAILURE, UPDATE_CAPTION_REQUEST, UPDATE_CAPTION_SUCCESS, UPDATE_PASSWORD_FAILURE, UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_SUCCESS, UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, USER_POSTS_FAILURE, USER_POSTS_REQUEST, USER_POSTS_SUCCESS } from "../constants/postConstants";



export const postOfFollowingReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_OF_FOLLOWING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_OF_FOLLOWING_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };

    case POST_OF_FOLLOWING_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
export const likeReducer = (state = {}, action) => {
  switch (action.type) {
    case LIKE_REQUEST:
    case ADD_COMMENT_REQUEST:
    case DELETE_COMMENT_REQUEST:    
    case NEW_POST_REQUEST:    
    case UPDATE_CAPTION_REQUEST:    
    case DELETE_POST_REQUEST:    
    case UPDATE_PROFILE_REQUEST:    
    case UPDATE_PASSWORD_REQUEST:    
    case DELETE_PROFILE_REQUEST:    
    case FORGOT_PASSWORD_REQUEST:    
    case RESET_PASSWORD_REQUEST:    
    case FOLLOW_USER_REQUEST:    
      return {
        ...state,
        loading: true,
      };
    case LIKE_SUCCESS:
    case ADD_COMMENT_SUCCESS:
    case DELETE_COMMENT_SUCCESS:    
    case NEW_POST_SUCCESS:    
    case UPDATE_CAPTION_SUCCESS:    
    case DELETE_POST_SUCCESS:    
    case UPDATE_PROFILE_SUCCESS:    
    case UPDATE_PASSWORD_SUCCESS:    
    case DELETE_PROFILE_SUCCESS:    
    case FORGOT_PASSWORD_SUCCESS:    
    case RESET_PASSWORD_SUCCESS:    
    case FOLLOW_USER_SUCCESS:    
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    case LIKE_FAILURE:
    case ADD_COMMENT_FAILURE:
    case DELETE_COMMENT_FAILURE:    
    case NEW_POST_FAILURE:    
    case UPDATE_CAPTION_FAILURE:    
    case DELETE_POST_FAILURE:    
    case UPDATE_PROFILE_FAILURE:    
    case UPDATE_PASSWORD_FAILURE:    
    case DELETE_PROFILE_FAILURE:    
    case FORGOT_PASSWORD_FAILURE:    
    case RESET_PASSWORD_FAILURE:    
    case FOLLOW_USER_FAILURE:    
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
       case CLEAR_MESSAGE:
      return {
        ...state,
        message: null,
      };


    default:
      return state;
  }
};


export const myPostsReducer = (state = {}, action) => {
  switch (action.type) {
    case MY_POSTS_REQUEST:
    case GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case MY_POSTS_SUCCESS:
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };

    case MY_POSTS_FAILURE:
    case GET_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
export const userPostsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_POSTS_SUCCESS:
      console.log("Posts",action.payload);
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };

    case USER_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
