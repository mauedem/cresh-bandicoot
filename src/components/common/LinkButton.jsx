import './LinkButton.css'

function LinkButton({ linkHref, linkSrc, className }) {
    const classNames = className + ' link-button';

    function handleClick() {
        window.open(linkHref, '_blank');
    }

    return (
        <button className={classNames} onClick={handleClick}>
            <img src={linkSrc} alt="" width="31" height="31" />
        </button>
    )
}

export default LinkButton;
