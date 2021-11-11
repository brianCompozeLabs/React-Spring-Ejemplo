import axios from 'axios'
import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            titulo: '',
            autor: '',
            paginas: ''
        }
    }

    changeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8080/libros', this.state)
        .then(res =>{
            console.log(res)
          })
          .catch(err => {
              console.log(err)
          })
          window.location.reload();
    }

    render() {
        const{titulo, autor, paginas} = this.state

        return (
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '20vh'}}>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>Titulo: </label>
                        <input type="text" name="titulo" value={titulo} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <label>Autor: </label>
                        <input type="text" name="autor" value={autor} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <label>Paginas: </label>
                        <input type="number" name="paginas" value={paginas} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
