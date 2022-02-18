import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000' });
//http://localhost:5000
API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) { 
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    //also we need to return request so that we can make future request
    return req;
});

export const createSnippet = (details) => API.post('/pastehere/create',{details});
export const getSnippet = (id,key) => API.post('/pastehere/fetch',{id,key});
export const getMySnippets = () => API.get('/pastehere/mySnippets');
export const deleteSnippet = (id) => API.delete(`/pastehere/${id}`);
export const editTime = (id) => API.patch(`/pastehere/${id}`);
export const Snippet = (id) => API.get(`/pastehere/history/${id}`);
//.../users
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);