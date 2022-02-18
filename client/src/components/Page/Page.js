import React from 'react';
import { useSelector } from 'react-redux';
import { Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Page = () => {
    const { snippet } = useSelector((state) =>  state.snippets);
    const navigate = useNavigate();
    const open = () => {
        navigate(`/pastehere/${snippet._id}`);
    }
  return (
    <div>your link is : <div onClick={open}>/pastehere/{snippet._id}</div></div>
  )
}

export default Page;