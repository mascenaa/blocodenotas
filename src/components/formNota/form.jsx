import React, { Component } from 'react';
import "../formNota/form.css"

class FormularioCad extends Component {
  
    constructor(props){
        super(props);
        this.titulo="";
        this.texto="";
    }
    _handleMudanca(evento){
        this.titulo = evento.target.value
    }
    _handleMudancaNota(eventoarea){
        this.texto = eventoarea.target.value
    }

    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto);
        
      }
    render() {
        return (
            <section className="sectionNav">
                <div className="boxDiv">
                    <h1 className="title">📃 · Crie sua nota</h1>
                    <form
                        onSubmit={this._criarNota.bind(this)}
                    >
                        <input 
                        type="text"
                        placeholder="Título da nota"
                        onChange={this._handleMudanca.bind(this)} />
                        <textarea
                        row={15}
                        placeholder="Escreva sua nota..." 
                        onChange={this._handleMudancaNota.bind(this)}
                         />
                        <button>Criar nota</button>
                    </form>
                </div>
            </section>
        );
    }
}


export default FormularioCad;