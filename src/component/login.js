import React from 'react';
import Box from '@material-ui/core/Box'
import {TextField,Button} from '@material-ui/core';
import axios from 'axios';

class Login extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={ 
            email:"",
            password:""
        };
    }

    createPost=async()=>{
        try{
            const {email,password}=this.state;
            const response=await axios.post("http://localhost:3000/auth/login",{
                email:email,
                password:password
            });
            if(response.data){
                await localStorage.setItem("token",response.data)
                this.props.history.push('/view');
            }
            
            this.setState({email:"",password:""});  
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
      <TextField id="filled-basic" label="email" name="email" value={this.state.email} onChange={this.handleChange} variant="filled" /><br/>
      </div>
      <div class="designation">
      <TextField id="filled-basic" label="password" name="password" value={this.state.password} onChange={this.handleChange} variant="filled" /><br/>
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

export default Login    
