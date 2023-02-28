import './index.css'

const PasswordItem = props => {
  const {passwordDetails, onDeletePassword, showPasswords} = props
  const {id, website, username, password} = passwordDetails

  // EXTRACTING INITIAL FROM WEBSITE LINK
  const initialLetter = website.split('').slice(0, 1)

  const deletePassword = () => {
    onDeletePassword(id)
  }

  return (
    <li className="password-details-container">
      <div className="initial-container">
        <p className="initial-text">{initialLetter[0].toUpperCase()}</p>
      </div>
      <div className="user-entered-details">
        <p className="details">{website}</p>
        <p className="details">{username}</p>
        {showPasswords ? (
          <p className="password">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars-image"
          />
        )}
      </div>

      <button
        className="delete-button"
        type="button"
        data-testid="delete"
        onClick={deletePassword}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
