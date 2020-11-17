import React from 'react';
import axios from 'axios';

class Characters extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
       datos: []
    }
  }

  componentDidMount () {
     axios.get('')
       .then(res =>{
         console.log(res.data)
         this.setState({
           datos: res.data.results
          })
       }).catch(err=>{
         console.log(err.message)
        })
    }


 render(){
    console.log(this.state.datos);
    const characters = this.state.datos;
    
   return(
    <div className="bg-primary mt-5">
    <h2 className="card__title">Tenemos Estos Personajes disponibles</h2>
    <div className="container-card d-flex mt-5 justify-content-center">
      <div className="row justify-content-center">
          {characters.map((item)=>{
            return(
              <div  className="container-col card mx-4 mb-4 cardSize">
              <div className="card-body text-center">
                <img className="rounded-circle  m-auto d-block"
                  width="250"
                  height="250"
                  src={item.image}
                  alt="Responsive image"
                />
                <p className="card-title ">{item.name}</p>
                <p className="card-title">{item.status}</p>
                <p>{item.gender}</p>
                  <button className="btn btn-info">Ver mas</button> 
              </div>
            </div>
            );
          })}   
      </div>
    </div>
  </div>
   )
 }
}



export default Characters;
