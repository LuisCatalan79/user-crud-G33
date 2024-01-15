import './styles/ConfirmationCard.css'
import './styles/FormUser.css'
import './styles/ConfirmationCard.css'
const ConfirmationCard = ({setIsConfirmation,userDelete}) => {
    
    const handleExit=()=>{
        setIsConfirmation(true)
        
    }
  return (
    <article className='confirmation'>
        <div className='form__x' onClick={handleExit}>x</div>
        <h2 className='title__confirmation'>User Deleted</h2>
        <p className='msg__confirmation'>El usuario <span className='msg__confirmation__user'>{userDelete}</span> ha sido eliminado</p>
        <button className='btn__confirmation' onClick={handleExit}>Aceptar</button>
    </article>
  )
}

export default ConfirmationCard