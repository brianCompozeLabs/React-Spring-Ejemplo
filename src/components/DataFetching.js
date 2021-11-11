import React, {useState, useEffect} from "react";
import axios from 'axios';



function DataFetching(){
    const[libros, setLibros] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/libros')
        .then(res =>{
          console.log(res)
          setLibros(res.data)
        })
        .catch(err => {
            console.log(err)
        })
      }, [])

    return(
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '20vh'}}>
    <ul>
    {
        libros.map(libro => (
        <li key={libro.titulo}>Titulo: {libro.titulo} Autor: {libro.autor} Paginas: {libro.paginas}</li>
        ))}
    </ul>
    </div>
    )
}

export default DataFetching;
