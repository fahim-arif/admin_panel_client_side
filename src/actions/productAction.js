import axios from 'axios';
import {
  PRODUCT_LOADING,
  PRODUCT_STOPLOADING,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  LIST_PRODUCT,
  GET_ERRORS,
} from './types';

// Get all product
export const listProduct= () => dispatch => {
  dispatch(setProductLoading());
  axios
    .get('/api/product/')
    .then(res =>{
      console.log("product Result",res.data)
      dispatch({
        type: LIST_PRODUCT,
        payload:res.data
      })
    })
    .catch(err =>{
      console.log("err data",err)
      dispatch({
        type: GET_ERRORS,
        payload:err.response.data
      })

    });
};

// Get one product
export const listProductOne= (data) => dispatch => {
  dispatch(setProductLoading());
  axios
    .post('/api/product/getproduct',data)
    .then(res =>{
      dispatch({
        type: LIST_PRODUCT,
        payload:res.data
      })
    })
    .catch(err =>{
      console.log("err data",err)
      dispatch({
        type: GET_ERRORS,
        payload:err.response.data
      })

    });
};

// Create product
export const addProduct= (productData) => dispatch => {
    dispatch(setProductLoading());
    axios
    .post('/api/product/',productData)
    .then(res =>
        dispatch({
            type: ADD_PRODUCT,
            payload:res.data
        })
    )
    .catch(err =>{
        dispatch({
            type: GET_ERRORS,
            payload:err.response.data
        })
        dispatch(stopProductLoading());
    });
};

// Edit product
export const editProduct= (productData) => dispatch => {
    dispatch(setProductLoading());
    axios
    .post('/api/product/edit',productData)
    .then(res =>
        dispatch({
            type: EDIT_PRODUCT,
            payload:res.data
        })
    )
    .catch(err =>{
        dispatch({
            type: GET_ERRORS,
            payload:err.response.data
        })
        dispatch(stopProductLoading());
    });
};
// delete product
export const deleteProduct= (deleteData) => dispatch => {
    dispatch(setProductLoading());
    axios
    .post('/api/product/delete',deleteData)
    .then(res =>
        dispatch({
            type: DELETE_PRODUCT,
            payload:res.data
        })
    )
    .catch(err =>{
        dispatch({
            type: GET_ERRORS,
            payload:err.response.data
        })
        dispatch(stopProductLoading());
    });
};
// Product loading
export const setProductLoading = () => {
    return {
      type: PRODUCT_LOADING
    };
  };
  export const stopProductLoading = () => {
    return {
      type: PRODUCT_STOPLOADING
    };
  };