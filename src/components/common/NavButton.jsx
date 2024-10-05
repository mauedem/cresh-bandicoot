import './NavButton.css'

function NavButton({ buttonText, buttonHref, className, handleClick }) {
    const classNames = className + ' nav-button';

    return (
        <button
            className={classNames}
            onClick={handleClick}
        >
            <span className="nav-button__link">{buttonText}</span>
        </button>
    )
}

export default NavButton;
