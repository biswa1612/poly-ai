import fetch from "node-fetch";
import mongoose from "mongoose";
import textBody from "../models/textBody.js";
import User from "../models/user.js";
import publicIp from 'public-ip';
export const createSnippet = async (req,res) => {
    const {title,code,key} = req.body.details;
    console.log(code);
    const url = 'https://classify-web.herokuapp.com/api/encrypt';
        const jsonData = JSON.stringify({ 
            data: code, key: key
        });
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: jsonData
        });
        const result = await response.json();
        //console.log(typeof result.result);
        const newText = new textBody({title: title, message: result.result, creator: req.userId, createdAt: new Date().toISOString()});
        console.log(result);
        try {
            await newText.save();
            res.status(201).json(newText);   //succesfully created
        } catch (error) {
            res.status(409).json({message: error.message});   //conflict error
        }
}


export const getSnippet = async (req,res) => {
    const {id,key} = req.body;
    //console.log(details);
       try {
        const snippet = await textBody.findById(id);
        const url = 'https://classify-web.herokuapp.com/api/decrypt';
            const jsonData = JSON.stringify({ 
                data: snippet.message, key: key
            });
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: jsonData
            });
            const result = await response.json();
            const snip = await textBody.findById(id);
            snip.users.push(req.userId);
            //update post
            const updatedSnip = await textBody.findByIdAndUpdate(id, snip , { new: true});
            const user = await User.find({_id: req.userId});
            const ip = await publicIp.v4();
            const updatedUser = await User.findOneAndUpdate({_id: req.userId},{...user, ip: ip}, { new: true});
            console.log(updatedUser);
            //console.log(typeof result.result);
           console.log(result);
        res.status(201).json(result);   //succesfully created
    } catch (error) {
        res.status(409).json({message: error.message});   //conflict error
    }
}

export const getMySnippets = async (req,res) => {
    
    //console.log(details);
       try {
        const snippets = await textBody.find({ creator: { $in: req.userId } });
        
           //console.log(snippets);
        res.status(201).json(snippets);   //succesfully created
    } catch (error) {
        res.status(409).json({message: error.message});   //conflict error
    }
}

export const deleteSnippet = async (req,res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Post with that id');
    await textBody.findByIdAndRemove(id);
    res.json({ message: 'Post deleted successfully'})
}

export const editTime = async (req,res) => {
    const { id } = req.params;
    //we are checking if the id we have passed is valid or not
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Post with that id');
    const snippet = await textBody.findById(id);
    const updatedSnippet = await textBody.findByIdAndUpdate(id, {title: snippet.title, message: snippet.message, creator: snippet.creator, createdAt: new Date().toISOString()}, { new: true});  //new will return the updated post
    res.json(updatedSnippet);
}

export const Snippet = async (req,res) => {
    const { id } = req.params;
    //we are checking if the id we have passed is valid or not
    try{
        
        const snippet = await textBody.findById(id);
        const user = await User.find({_id : {$in: snippet.users}})
        res.json(user);
    }
    catch (error){
        res.status(409).json({message: error.message});
    }
}