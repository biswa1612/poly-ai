import React from 'react'
import { Typography, Grid, Paper, Button, Link } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
const History = () => {
    const { user } = useSelector((state) =>  state.snippets);
    console.log(user);
  return (
    <div>
        <Grid container alignItems="stretch" spacing={3}>
                {user.map((u) => (
                    <Grid key={u._id} item xs={12} sm={12} md={12} lg={12}>
                        
                        <Typography>User name {u.name} accessed your snippet with an IP address {u.ip}</Typography>
                    </Grid>
                ))}
        </Grid>
    </div>
  )
}

export default History