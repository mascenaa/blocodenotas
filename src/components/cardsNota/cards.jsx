import React, { Component } from 'react';
import "./card.css"

class Cards extends Component {
    render() {
        return (

            <section className="card-body">
                <div className="card-first">
                    <header>
                          <h3 className="card-titulo">📑· {this.props.titulo}</h3>
                    </header>
                        <p className="cardP">{this.props.texto}</p>
                        <button className="card-delete"
                         onClick={this.props.apagarNota}>❌ Deletar</button>
                </div>
            </section>
        );
    }
}

export default Cards;