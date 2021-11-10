import React from 'react';
import Box from '@material-ui/core/Box'
import {TextField,Button} from '@material-ui/core';
import axios from 'axios';

class LoginComponent extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={ 
            posts:[],
            name:"",
            designation:"",
            projectDetails:"",
            educationDetails:"",
        };
    }

    createPost=async()=>{
        try{
            const {name,designation,projectDetails,educationDetails}=this.state;
            const {data:post}=await axios.post("http://localhost:3000/user/saveuser",{
                "name":name,
                "designation":designation,
                "projectDetails":projectDetails,
                "educationDetails":educationDetails,
            });
            let posts=[...this.state.posts];
            posts.push(post)
            // console.log(data);  
            this.setState({posts,name:"",designation:"",projectDetails:"",educationDetails:""});  
        }
        catch(err){
            console.error(err);
        }
        
    }

    
    handleChange=({target:{name,value}})=>{
        this.setState({[name]:value});
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.createPost();
    }
render()
{
    return (
        <Box
        component="form"
        onSubmit={this.handleSubmit}
                sx={{
          '& > :not(style)': {flexgrow:1,margin:"30px", m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
      <div class="name">
      <TextField id="filled-basic" label="name" name="name" value={this.state.name} onChange={this.handleChange} variant="filled" /><br/>
      </div>
      <div class="designation">
      <TextField id="filled-basic" label="designation" name="designation" value={this.state.designation} onChange={this.handleChange} variant="filled" /><br/>
      </div>
      <div class="projectDetails">
      <TextField id="filled-basic" label="projectDetails" name="projectDetails" value={this.state.projectDetails} onChange={this.handleChange} variant="filled" /><br/>
      </div>
      <div class="educationDetails">
      <TextField id="filled-basic" label="educationDetails" name="educationDetails"value={this.state.educationDetails} onChange={this.handleChange} variant="filled" /><br/>
      </div>
      <div class="submit">
      <Button variant="contained" type="submit" color="primary">
      Submit
      </Button>
      </div>
      </Box>
    );
}
} 

export default LoginComponent    
