import "../../components/Tour/Tour.scss";

function Tour() {
    return(
        <article className="tour">
            <div className="img-container">
                <img src="./img/rome.jpg"
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
                       ABCJMFJDFD,JFGJFK
                </p>
            </div>
        </article>
        )
}

export default Tour