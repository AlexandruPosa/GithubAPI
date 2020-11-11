import React, { Component } from "react";
import {Form,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends Component {
   state = {
      isLoaded: false,
      inputValue:"",
      reposiories:[]
  }
  


 
  handleInputChange = (event) => {
    
    const inputValue = event.target.value;
    
    this.setState({ inputValue });

  };


  render() {
    return (
      <div style={{width:"500px",textAlign:"center",marginLeft:"40px", marginTop:"40px"}}>
        <Form> 
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Github username</Form.Label>
                <Form.Control type="name" placeholder="Enter username" onChange={this.handleInputChange} />
                
                </Form.Group>
           {this.state.inputValue ? <Link to ={"/Repo?username=" + this.state.inputValue}> <Button variant="primary" type="submit" onClick={this.handleOnClick} >Find most successful repository</Button></Link> : null}
        </Form>
        
        </div>
    );
  }
}

export default Home;