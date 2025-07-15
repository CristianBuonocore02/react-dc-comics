export default function Header() {
    return (
        <header>
            <div className="flexHeader">
                <div>
                    <img src="/public/dc-logo.png" alt="logo DC" />
                </div>
                <div className="list">
                    <a href="">CHARACTERS</a>
                    <a href="" className="comics">COMICS</a>
                    <a href="">MOVIES</a>
                    <a href="">TV</a>
                    <a href="">GAMES</a>
                    <a href="">COLLECTIBLES</a>
                    <a href="">VIDEOS</a>
                    <a href="">FANS</a>
                    <a href="">NEWS</a>
                    <a href="">SHOP</a>
                </div>
            </div>
            <div className="comingSooon">
                <div className="container">
                    <h4>-- content goes here -- </h4>
                </div>

            </div>
        </header>
    )
}