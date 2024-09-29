import './NavButton.css'

function NavButton({ buttonText, buttonHref, className }) {
    const classNames = className + ' nav-button';

    return (
        <button className={classNames}>
            <a
                href={buttonHref}
                className="nav-button__link"
            >
                {buttonText}
            </a>
        </button>
    )
}

export default NavButton;
