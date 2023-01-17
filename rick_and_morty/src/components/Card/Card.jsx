import styles from './Card.module.css'
import { Link } from 'react-router-dom'


export default function Card(props) {
   const {onClose, id, name, species, gender, image} = props
   return (
      <div className={styles.card}>
         <button onClick={onClose}>X</button>
         <Link to={`/detail/${id}`} >
            <h5 className="card-title">{name}</h5>
         </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  className= {styles.picture}src={image} alt="" />
      </div>
   );
}
