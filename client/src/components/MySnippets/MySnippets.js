import { Typography, Grid, Paper, Button, Link } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteSnippet, editTime } from '../../actions/snippets';
const MySnippets = () => {
    const { snippets } = useSelector((state) =>  state.snippets);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const openPost = (id) => {
        navigate(`/pastehere/${id}`);
    }
  return (
    <div>
        <Grid container alignItems="stretch" spacing={3}>
            <Typography style={{marginLeft: '20px'}}>My Snippets:</Typography>
                {snippets.map(({title, _id}) => (
                    <Grid key={_id} item xs={12} sm={12} md={12} lg={12}>
                        <Paper style={{padding: '15px'}}>
                            <Link>
                            <Typography onClick={() => openPost(_id)}>{title}</Typography>
                            </Link>
                            <Button size="small" color="secondary" onClick={() => dispatch(deleteSnippet(_id,navigate))}>
                                <DeleteIcon fontSize="small" /> Delete
                            </Button>
                            <Button size="small" color="secondary" onClick={() => dispatch(editTime(_id,navigate))}>
                                <EditIcon fontSize="small" /> Renew Expiration Time
                            </Button>
                        </Paper>
                    </Grid>
                ))}
        </Grid>
    </div>
  )
}

export default MySnippets