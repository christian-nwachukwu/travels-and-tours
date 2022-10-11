import "../../components/Tour/Tour.scss";

function Tour() {
    return(
        <article>
            <div className="img-container">
                <img src="https://th.bing.com/th/id/OIP.y0hZ0mZ9IA5qEIRGUtKxzQHaE0?w=242&h=180&c=7&r=0&o=5&pid=1.7"
                alt="" />
                <span className="close-btn">
                    <i className="fas fa-window-close" />
                </span>
            </div>
            <div className="tour-info">
                <h3>city</h3>
                <h4>name</h4>
                <h5>info{" "}
                    <span>
                        <i className="fas fa-caret-square-down" />
                    </span>
                </h5>
                <p>
                        Lorem ipsum is the most popular
                         type placeholder text in the world, 
                         used since at least the 1960s in 
                         both print and digital media.
                </p>
            </div>
        </article>
    )
}

export default Tour