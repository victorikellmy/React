import React, {Component} from "react";


class Equipe extends Component{
  render(){
    return(
      <div>
        <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.cargo}/>  
      </div>

    );
  }
}

class Sobre extends Component{
  render(){
    return(
      <div>
        <h2>Nome:{this.props.nome}</h2>
        <h2>Cargo:{this.props.cargo}</h2>
        <h2>idade:{this.props.idade}</h2>
        <hr/>
      </div>
    );
  }
}

export default function App(){
  return(
    <div>
      <h1>Conheça nossa equipe</h1>
      <Equipe nome="Joao" cargo="Programador" idade="18"/>
      <Equipe nome="Lucas" cargo="Programador" idade="19"/>
      <Equipe nome="Pedro" cargo="Programador" idade="20"/>
    </div>
  );
}
