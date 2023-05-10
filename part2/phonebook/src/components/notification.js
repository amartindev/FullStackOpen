
const Notification = ({message}) => {
    if (message === null){
        return null
    } else {
        return (
            <div>
                <p className="notification">{message}</p>
            </div>
        )
    }
}

export default Notification