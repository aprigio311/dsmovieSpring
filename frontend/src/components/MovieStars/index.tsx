import {ReactComponent as StarFull} from '../../assets/img/vect.svg';
import {ReactComponent as StarHalf} from '../../assets/img/vect (1).svg';
import {ReactComponent as StarEmpty} from '../../assets/img/vect (2).svg';
import "./style.css"

function MovieStars(){
    return(
        <div className="dsmovie-stars-container">
  <StarFull />
  <StarFull />
  <StarFull />
  <StarHalf />
  <StarEmpty />
</div>
    )
}
export default MovieStars;