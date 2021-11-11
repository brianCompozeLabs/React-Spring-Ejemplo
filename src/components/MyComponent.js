import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:8080/libros")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              libros: result.libros
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, libros } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {libros.map(libro => (
              <li key={libro.titulo}>
                {libro.autor} {libro.paginas}
              </li>
            ))}
          </ul>
        );
      }
    }
  }