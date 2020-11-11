import React, { Component } from "react";
import {Form,Button} from 'react-bootstrap';
import RepoDetails from "./RepoDetails";
import { Link } from 'react-router-dom';
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
// import "bootstrap/dist/css/bootstrap.min.css";

class Repo extends Component {
  constructor(props) {
    super(props);
    this.state = {
       
        repositories:[],

    }
    this.getRepo = this.getRepo.bind(this);
  }

     sortByRating = () => {
         let sortedRepositories = [];
         sortedRepositories = this.state.reposiories.sort(function (a, b) {
            return a.value - b.value;
          });
         this.setState({ repositories: sortedRepositories});
         console.log(this.state.repositories);


    }

    getRepo(){
      let search = new URLSearchParams(this.props.location.search);
        let username= search.get("username");
        
        let url= `https://api.github.com/users/${username}/repos`;

      return fetch(url).then(result => {return result.json();})
      .catch(error => console.log("Request failed", error));
  }
    

    componentDidMount() {
        console.log("mounted ");
        this.getRepo().then(response =>{
            if(response.message!=='Not Found'){
              let sortedRepo = response.sort(function (a, b) {return b.watchers_count - a.watchers_count});
              this.setState({
                repositories: sortedRepo.slice(0,10)
                
              })
            }
            
          });

      }

     

  render() {
   
    const { repositories } = this.state;
    return (
     <div>
       
       <div style={{marginTop:"20px",marginLeft:"20px"}}>
        <Link to ={"/"}> <Button variant="primary" type="submit" >Go Back</Button></Link>
        </div>
        <div style={{textAlign:'center'}}>
        
        {repositories.length>0 ? repositories.map((repo, index) => (

          
         <RepoDetails name={repo.name} rating={repo.watchers_count} id={index+1}/>
        
        )) : <p>Username not found</p>}
  
        
        </div>
      </div>
        
    );
  }
}

export default Repo;