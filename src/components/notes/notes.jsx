import React, { Component } from "react";
import Cards from "../cardsNota/cards";
import "../notes/notes.css"



class ListaDeNotas extends Component {

  apagar(){
    const indice = this.props.indice;
    this.props.apagarNota(indice)
  }

    render() {
        return (
          <ul className="lista-notas">
            {this.props.notas.map((nota, index) => {
              return (
                <li className="lista-notas_item" key={index}>
                  <Cards 
                  indice={index}
                  titulo={nota.titulo} 
                  texto={nota.texto}
                  apagarNota={this.apagar.bind(this)}
                  />
                </li>
              );
            })}
          </ul>
        );
      }
    }
    


export default ListaDeNotas;