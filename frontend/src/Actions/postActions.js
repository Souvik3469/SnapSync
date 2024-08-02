import axios from "axios";
import { ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, DELETE_COMMENT_FAILURE, DELETE_COMMENT_REQUEST, DELETE_COMMENT_SUCCESS, DELETE_POST_FAILURE, DELETE_POST_REQUEST, DELETE_POST_SUCCESS, GET_POSTS_FAILURE, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, LIKE_FAILURE, LIKE_REQUEST, LIKE_SUCCESS, NEW_POST_FAILURE, NEW_POST_REQUEST, NEW_POST_SUCCESS, UPDATE_CAPTION_FAILURE, UPDATE_CAPTION_REQUEST, UPDATE_CAPTION_SUCCESS } from "../constants/postConstants";

export const getpost =() =>async(dispatch)=>{
  try{
    dispatch({
      type:GET_POSTS_REQUEST
    })
    const {data} =await axios.get('/api/v1/posts')
   

    dispatch({
      type:GET_POSTS_SUCCESS,
      payload:data.posts
    })

  }catch(error){
    dispatch({
      type:GET_POSTS_FAILURE,
      payload: "failed",
    })
  }
}
export const likePost = (id) => async (dispatch) => {
  try {
    dispatch({
      type: LIKE_REQUEST,
    });

    const { data } = await axios.get(`/api/v1/post/${id}`);
    dispatch({
      type: LIKE_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: LIKE_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const addCommentOnPost = (id, comment) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_COMMENT_REQUEST,
    });

    const { data } = await axios.put(
      `/api/v1/post/comment/${id}`,
      {
        comment,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: ADD_COMMENT_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: ADD_COMMENT_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const deleteCommentOnPost = (id, commentId) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_COMMENT_REQUEST,
    });

    const { data } = await axios.delete(`/api/v1/post/comment/${id}`, {
      data: { commentId },
    });
    dispatch({
      type: DELETE_COMMENT_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: DELETE_COMMENT_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const createNewPost = (caption, image) => async (dispatch) => {
  try {
    dispatch({
      type: NEW_POST_REQUEST,
    });

    const { data } = await axios.post(
      `/api/v1/post/upload`,
      {
        caption,
        image,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: NEW_POST_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: NEW_POST_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const updatePost = (caption, id) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_CAPTION_REQUEST,
    });

    const { data } = await axios.put(
      `/api/v1/post/${id}`,
      {
        caption,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: UPDATE_CAPTION_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CAPTION_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_POST_REQUEST,
    });

    const { data } = await axios.delete(`/api/v1/post/${id}`);
    dispatch({
      type: DELETE_POST_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: DELETE_POST_FAILURE,
      payload: error.response.data.message,
    });
  }
};