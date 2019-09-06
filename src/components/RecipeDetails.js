import React, { Component } from 'react';
import {recipe} from "../tempDetails";
import {keyys, proxy} from '../config';


export default class RecipeDetails extends Component {
   /* constructor(props){
        super(props)

        this.state = {
            recipe: recipe,
            url: `${proxy}http://food2fork.com/api/get?key=${key}&rId=${this.props.id}`
        }
    }
   

  async componentDidMount(){
       try{
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      this.setState({
        recipe:jsonData.recipe
      })
    } catch(error){
      console.log(error);
    }
}
    */
 
  state= {
      recipe:[]
  }

  async componentDidMount(){
      const id = this.props.id;
      const url = `${proxy}http://food2fork.com/api/get?key=${keyys}&rId=${id}`;
      try{
        const data = await fetch(url);
        const jsonData = await data.json();
        this.setState((state, props) => {
            return {
                recipe: jsonData.recipe
            }
        }, ()=>{});
      } catch(error){
        console.log(error);
      }
  }
    
  
  render() {
      const{image_url,publisher,publisher_url,source_url,title,ingredients}=this.state.recipe;
      const{handleIndex} = this.props
      console.log(recipe)
      
    return (
     <React.Fragment>
        <div className="container">
        <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
        <button type="button" className="btn btn-warning mb-5 text-capitalize" onClick={() => handleIndex(1)}>back to recipe list</button>
        <img src={image_url} className="d-block w-100" alt="recipe"/>
        </div>
        {/*details section*/}
        <div className="col-10 mx-auto col-md my-3">
        <h6 className="text-uppercase">{title}</h6>
        <h6 className="text-warning text-caplitalize text-slanted">provided by {publisher}</h6>
        <a href={publisher_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2 text-capitalize">publisher webpage</a>
        <a href={source_url} target="_blank" rel="noopener noreferrer" className="btn btn-success mt-2 mx-3 text-capitalize">recipe url</a>
        <ul className="list-group mt-4">
        <h2 className="mt-3 mb-4">Ingredients</h2>
        {
            ingredients.map((item,index) => {
                return(
                    <li key={index} className="list-group-item text-slanted">
                    {item}
                    </li>
                )
            })
        }
         </ul>
        </div>
        
        </div>
        </div>
     </React.Fragment>
    )
  }
}
