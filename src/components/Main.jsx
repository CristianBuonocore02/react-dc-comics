import ComicCard from "./ComicCard";
import comics from "./ComicData";


export default function Main() {

    const items = [
        {
            img: "/buy-comics-digital-comics.png",
            link: "digital comics"
        },
        {
            img: "/buy-comics-merchandise.png",
            link: "dc merchandise"
        },
        {
            img: "/buy-comics-subscriptions.png",
            link: "subscriptions"
        },
        {
            img: "/buy-comics-shop-locator.png",
            link: "comic shop locator"
        },
        {
            img: "/buy-dc-power-visa.svg",
            link: "dc power visa"
        },

    ]


    return (
        <main>
            <div className="comingSoon">
                <div className="jumbotron">
                    <img src="public/jumbotron.jpg" alt="jumboton" />
                </div>
                <div className="container py-5">
                    <div className="row g-4">
                        {comics.map((comic) => (
                            <div key={comic.id} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
                                <div className="thumb-wrapper">
                                    <img src={comic.thumb} alt={comic.title} className="img-fluid" />
                                </div>
                                <h6 className="text-white mt-2">{comic.title}</h6>
                            </div>
                        ))}

                    </div>
                </div>

                <div className="load-more-wrapper">
                    <button className="load-more-btn">LOAD MORE</button>
                </div>
            </div>
            <div className="flexMain">
                <div className="listMain">
                    {items.map((item) => {
                        return (
                            <div>
                                <img src={item.img} alt="" />
                                <a href="">{item.link}</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    )



}