

const Card = (props) => {
    return (
        <div className='card'>
            <div>
                <div className="top">
                    <img src={props.img} alt="" />
                </div>
                <div className="middle">
                    <h1>{props.heading}</h1>
                    <p>{props.data}</p>
                </div>
            </div>
            <div className="bottom">
                <button>Explore </button>
            </div>
        </div>
    )
}

export default Card