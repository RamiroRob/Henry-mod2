import Card from "./Card";

export default function Cards(props) {
  const { characters } = props;
  let tarjetas = characters.map(elemento => 
  <Card key={elemento.name}
        name={elemento.name}
        species={elemento.species}
        gender={elemento.gender}
        image={elemento.image}
        onClose={() => window.alert('Emulamos que se cierra la card')}
        />)

  return <div>
            {tarjetas}
         </div>;
}
