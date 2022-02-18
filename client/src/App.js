import React from 'react'
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Page from './components/Page/Page';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import Auth from './components/Auth/Auth';
import MySnippets from './components/MySnippets/MySnippets';
import History from './components/History/History';
const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <BrowserRouter>
    <Container maxWidth="xl">
        <Navbar />
        <Routes>
            <Route path="/" exact element={<Navigate to="/pastehere" />} /> 
            <Route path="/pastehere" exact element={<Home/>} />
            <Route path="/pastehere/link" exact element={<Page/>} />
            <Route path="/pastehere/mySnippets" exact element={<MySnippets/>} />
            <Route path="/pastehere/:id" exact element={<Details/>} />
            <Route path="/pastehere/history" exact element={<History/>} />
            <Route path="/auth" exact element={!user ? <Auth/> : <Navigate to="/posts" />} />
        </Routes>
    </Container>
</BrowserRouter>
  );
}

export default App;