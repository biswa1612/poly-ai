import React, {useState} from 'react'
import { Container, Grow, Grid, TextField, Button, Typography} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { createSnippet } from '../../actions/snippets';
import { useNavigate } from "react-router-dom";


const Home = () => {
       const [details, setDetails] = useState({
          title: '', code: '', key: ''
       });
       const navigate = useNavigate();
        const classes = useStyles();
        const dispatch = useDispatch();
        const user = JSON.parse(localStorage.getItem('profile'));
        const handleSubmit = () => {
            //console.log(snippet);
           dispatch(createSnippet(details, navigate));
           setDetails({
               title: '', code: '', key: ''
           });
        }
        
     return (
        <Grow in>
            <Container maxWidth="xl">
                {!user ? <Typography style={{marginBottom: '10px'}}>You should be logged in to generate the link. Once you're logged in you need to fill all the three fields in order to activate the button</Typography> : null}
            <TextField name="title" multiline variant="outlined" label="Title" fullWidth value={details.title} onChange={(e) => setDetails({...details, title: e.target.value})} style={{marginBottom: '20px'}}/>
                <TextField name="code" rows={18} multiline variant="outlined" label="Enter your text" fullWidth value={details.code} onChange={(e) => setDetails({...details, code: e.target.value})} style={{marginBottom: '20px'}}/>
                <div>
                    <TextField name="key" column={8} variant="outlined" label="Secret Key" value={details.key} onChange={(e) => setDetails({...details, key: e.target.value})} style={{width: '60%'}}/>
                    <Button variant="contained" color="primary" style={{marginLeft: '80px', marginTop :'15px'}} onClick={handleSubmit} disabled={(details.title && details.code && details.key && user) ? false : true}>Generate</Button>
                </div>
            </Container>
        </Grow>
    );
};
    
//elevation in material ui gives us a effect in which page looks lifted up in the background with a shadow and border effect

export default Home;
