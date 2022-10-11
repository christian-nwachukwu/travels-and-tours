import Tour from "../../components/Tour/Tour";
import "../../components/TourList/TourList.scss"


function TourList() {
    return(
        <div className="container">
            <section className="tourlist">
                <Tour />
            </section>
        </div>
    )
}

export default TourList