import FutureImage from "../assets/future.jpg"

function Future() {
    return(
        <section className="future">
            <div className="future-content">
                <h1>The Future of Modern Legal Practice</h1>
                <div className="future-line"></div>
                <p>We continue to evolve with modern legal frameworks while staying rooted in strong ethical foundations.</p>
            </div>

            <div className="future-image">
                <img src={FutureImage} />
                <img src={FutureImage} />
            </div>
        </section>
    );
}

export default Future;