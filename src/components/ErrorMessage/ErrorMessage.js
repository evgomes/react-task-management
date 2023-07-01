import './ErrorMessage.css';

export default function ErrorMessage({ message, show }) {
    return (show && <div className="error-message">{message}</div>);
}