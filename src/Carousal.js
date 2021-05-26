import './style.scss'
function Carousal(prop)
{
    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://t4.ftcdn.net/jpg/01/87/32/45/360_F_187324536_REsabXPNd13vMOuU1ngeJlU5xVNxgEwy.jpg" className="d-block w-100" alt="..." />                    </div>
                    <div className="carousel-item">
                    <img  src="https://t3.ftcdn.net/jpg/00/94/80/40/360_F_94804070_TergeAEIefwWH5kaUWd8PuzPanrSihG2.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="https://t3.ftcdn.net/jpg/04/18/36/58/360_F_418365859_uuNpNgWSTTGzwCUQWMKMcDawVCKnE0Jz.jpg" alt="..." />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}
export default Carousal