export default function PopularSports() {
    return (
        <div className="popular-sports">
            <h1 className="font-bold underline">Most Popular Sports</h1>
            <div className="sports-image">
                <img 
                    src="/football.png" 
                    alt="Mbappe playing football"
                    width="700px"
                    height="500px"
                />
                <div className="sports-page">
                    <a href="#">See More</a>
                </div>
            </div>

            <div className="sports-image">
                <img
                    src="/cricket.png"
                    alt="2 woman playing cricket" 
                    width="700px"
                    height="500px"
                />
            </div>

            <div className="sports-image">
                <img
                    src="/hockey.png"
                    alt="6 man playing hockey"
                    width="700px"
                    height="500px"
                />
            </div>
        </div>
    );
}