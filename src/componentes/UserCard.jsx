import "./styles/UserCard.css"

const UserCard = ({user, deleteUser, setUserUpdate, setIsFormClose,setIsConfirmation,setUserDelete}) => {

    const handleDelete = () => {
        deleteUser(user.id)
        setUserDelete(`${user.first_name} ${user.last_name }`)
        setIsConfirmation(false)

    }

    const handleEdit = () => {
        setUserUpdate(user)
        setIsFormClose(false)
    }

  return (
    <article className="card__user">
    <h2 className="user__name">{user.first_name} {user.last_name}</h2>
    <hr className="user__hr" />
    <ul className="user__list">
      <li className="user__item__list">
        <span className="user__label">Email</span>
        <span className="user__info">{user.email}</span>
      </li>
      <li className="user__item__list">
        <span className="user__label">Birthday</span>
        <span className="user__info"><i className='bx bx-gift'></i>{user.birthday}</span>
      </li>
    </ul>
    <hr className="user__hr" />
    <footer className="footer__card">
      <button className="btn__delete" onClick={handleDelete}><i className='bx bx-trash'></i></button>
      <button className="btn__edit" onClick={handleEdit}><i className='bx bx-edit-alt' ></i></button>
    </footer>
  </article>
  )
}

export default UserCard