import React, { Component } from "react";
import { FaStar} from 'react-icons/fa';


class RepoDetails extends Component {
  render() {
    

    const { name, rating,id}= this.props;
    return (
     
      <div style={{ display:'flex', flexDirection:'row', marginTop:'10px' }}>
              
                
                  <div style={{margin:'10px',padding:'2px',backgroundColor:'blue', borderRadius: '3px' ,color:'white',width:'100px'}}>
                      {id}
                  </div>
                  <div style={{margin:'10px',padding:'2px'}}>
                      Name : {name}
                  </div>
                  <div style={{margin:'10px'}}>
                      <FaStar/> {rating}
                  </div>
                  

             
      </div>
      
    );
  }
}

export default RepoDetails;
