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
        <main className="flexMain">
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
        </main>
    )



}





{/* <main className="flexMain">
//         <div className="listMain">
//             <div>
//                 <img src="public/buy-comics-digital-comics.png" alt="" />
//                 <a href="">digital comics</a>
//             </div>
//             <div>
//                 <img src="public/buy-comics-merchandise.png" alt="" />
//                 <a href="">dc merchandise</a>
//             </div>
//             <div>
//                 <img src="public/buy-comics-subscriptions.png" alt="" />
//                 <a href="">subscriptions</a>
//             </div>
//             <div>
//                 <img src="public/buy-comics-shop-locator.png" alt="" />
//                 <a href="">comic shop locator</a>
//             </div>
//             <div>
//                 <img src="public/buy-dc-power-visa.svg" alt="" />
//                 <a href="">dc power visa</a>
//             </div>
//         </div>
//     </main>
// ) */}