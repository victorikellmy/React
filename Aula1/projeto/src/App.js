const BemVindo = (props)=>{
  return(
   <div>
      <Sobre nome={props.nome} idade={props.idade} funcao={props.funcao}/>
      <Social fb={props.facebook}/>
  </div>
  );
}


const Sobre = (props) =>{
  return(
    <div>
    <h3>Nome:{props.nome}</h3>
    <h3>Idade:{props.idade} anos</h3>
    <h3>Função:{props.funcao}</h3>
    <br/>
  </div>
  );
}

const Social = (props) =>{
  return(
    <div>
      <a>Social: </a>
      <a href={props.fb}>Facebook </a>
      <a>Instagram </a>
      <a>YouTube </a>
    </div>
  );

}

export default function App(){

  return(

    <div>
      <h1>Conhecendo equipe</h1>
      <BemVindo nome="Lucas" idade= "18" funcao ="Desenvolvedor" 
      facebook="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.infoescola.com%2Finternet%2Fhistoria-do-facebook%2F&psig=AOvVaw1VZbEfw9qm_tIOOXekPTIR&ust=1678209596717000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPDz8ojox_0CFQAAAAAdAAAAABAE"/>
      <BemVindo nome="Lana" idade= "19" funcao ="Back end" 
      facebook="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.infoescola.com%2Finternet%2Fhistoria-do-facebook%2F&psig=AOvVaw1VZbEfw9qm_tIOOXekPTIR&ust=1678209596717000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPDz8ojox_0CFQAAAAAdAAAAABAE"/>
      <BemVindo nome="Katarina" idade= "18" funcao ="Infraestrutura" 
      facebook="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.infoescola.com%2Finternet%2Fhistoria-do-facebook%2F&psig=AOvVaw1VZbEfw9qm_tIOOXekPTIR&ust=1678209596717000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPDz8ojox_0CFQAAAAAdAAAAABAE"/>
      <BemVindo nome="Victor" idade= "20" funcao ="Redes" 
      facebook="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.infoescola.com%2Finternet%2Fhistoria-do-facebook%2F&psig=AOvVaw1VZbEfw9qm_tIOOXekPTIR&ust=1678209596717000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPDz8ojox_0CFQAAAAAdAAAAABAE"/>

    </div>

  );
}
