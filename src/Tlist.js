import React from 'react';
import axios from 'axios';
class Tlist extends React.Component{

    state = {
            photos: []
    };

    componentDidMount(){
            axios.get("https://jsonplaceholder.typicode.com/photos")
            .then((response) => {
                console.log(response.data);
                this.setState({
                        photos: response.data.slice(0,10)
                });
            });

    }
    render(){
        return(
                <section>
                    {this.state.photos.map((photos) =>{
                        return (

                        <div className="row">
                        <div className="col s4 m4">
                          
                            <img  src= {photos.thumbnailUrl}></img>
                              <span className="card-title">{photos.title}</span>
                              <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                              <a href="#">This is a link</a>
                              <a href="#">This is a link</a>
                            </div>
                          </div>
                        
                      
                        )
                        })
                        }

                </section>

        );

    }

};

export default Tlist;