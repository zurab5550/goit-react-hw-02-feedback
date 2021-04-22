const FeedBackOptions = ({ options }) => {
    const btnElement = options.map(({ id, name, onClick }) => {
        return (
            <button key={id} onClick={onClick}>{ name}</button>
        )
    })
        return<> {btnElement} </>
}

export default FeedBackOptions