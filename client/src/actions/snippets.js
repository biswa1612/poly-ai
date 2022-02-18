import * as api from '../api';

export const createSnippet = (details, navigate) => async(dispatch) => {
    try {
       const {data} = await api.createSnippet(details);
       console.log(data);
       dispatch({type: 'CREATE', payload: data});
       navigate('/pastehere/link');
    } catch (error) {
        console.log(error.response.data.message);
    }
}

export const getSnippet = (id,key) => async(dispatch) => {
    try {
       const {data} = await api.getSnippet(id,key);
       console.log(data);
       dispatch({type: 'FETCH', payload: data.result});
       return data.result;
    } catch (error) {
        console.log(error.response.data.message);
    }
}

export const getMySnippets = () => async(dispatch) => {
    try {
       const {data} = await api.getMySnippets();
       console.log(data);
       dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.response.data.message);
    }
}

export const deleteSnippet = (id,navigate) => async(dispatch) => {
    try {
        await api.deleteSnippet(id);
        dispatch({type: 'DELETE', payload: id});
        navigate('/pastehere/mySnippets');
    } catch (error) {
        console.log(error);
    }
}

export const editTime = (id,navigate) => async(dispatch) => {
    try {
        const {data} = await api.editTime(id);
        dispatch({type: 'EDIT', payload: data});
        navigate('/pastehere/mySnippets');
    } catch (error) {
        console.log(error);
    }
}

export const Snippet = (id) => async(dispatch) => {
    try {
       const {data} = await api.Snippet(id);
       console.log(data);
       dispatch({type: 'HISTORY', payload: data});
    } catch (error) {
        console.log(error.response.data.message);
    }
}