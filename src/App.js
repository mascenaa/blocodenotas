import React, { Component } from 'react';
import ListaDeNotas from './components/notes/notes';
import FormularioCad from './components/formNota/form';
import "./components/cardsNota/cards"


class App extends Component {

  constructor(){
    super();
    this.notas = [];
    this.state = {
      notas:[]
    };
  }
  criarNota(titulo, texto){
     const novaNota = {titulo, texto};
     const novoArrayNotas = [...this.state.notas,novaNota];
     const novoEstado = {
       notas:novoArrayNotas
     }
     this.notas.push(novaNota);
     this.setState(novoEstado)
  }

  deleteNote(index){
   let arrayNotas = this.state.notas;
   arrayNotas.splice(index,1)

    this.setState({notas:arrayNotas})
  }

  render() {

  return (
    <section className="cardNota">
      <div>
          <FormularioCad criarNota = {this.criarNota.bind(this)} />
          <ListaDeNotas
          apagarNota={this.deleteNote.bind(this)}
          notas={this.state.notas} />
      </div>
    </section>
  );
}
}
export default App;
