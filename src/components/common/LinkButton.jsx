import './LinkButton.css'

function LinkButton({ linkHref, linkSrc, className }) {
    const classNames = className + ' link-button';

    function handleClick() {
        window.open(linkHref, '_blank');
    }

    return (
        <button
            className={classNames}
            onClick={handleClick}
        >
            <img className="link-button__img" src={linkSrc} alt="" />
        </button>
    )
}

export default LinkButton;
