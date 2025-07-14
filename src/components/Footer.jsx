export default function Footer() {
    return (

        <footer className="custom-footer text-white">
            <div className="container py-5">
                <div className="row">

                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-6 col-md-3">

                                <ul className="list-footer">
                                    <li><p> <strong>DC COMICS</strong></p></li>
                                    <li><a href="#">Lorem, ipsum.</a></li>
                                    <li><a href="#">Lorem, ipsum dolor.</a></li>
                                    <li><a href="#">Lorem, ipsum dolor.</a></li>
                                    <li><a href="#">Lorem, ipsum.</a></li>
                                    <li><a href="#">Lorem, ipsum.</a></li>
                                    <li><p> <strong>SHOP</strong></p></li>
                                    <li><a href="#">Lorem, ipsum.</a></li>
                                    <li><a href="#">Lorem, ipsum dolor.</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-3">

                                <ul className="list-footer">
                                    <li><p> <strong>DC</strong></p></li>
                                    <li><a href="#">Lorem, ipsum dolor.</a></li>
                                    <li><a href="#">Lorem ipsum dolor sit.</a></li>
                                    <li><a href="#">Lorem, ipsum.</a></li>
                                    <li><a href="#">Lorem, ipsum dolor.</a></li>
                                    <li><a href="#">Lorem, ipsum.</a></li>
                                    <li><a href="#">Lorem, ipsum dolor.</a></li>
                                    <li><a href="#">Lorem, ipsum.</a></li>
                                    <li><a href="#">Lorem, ipsum dolor.</a></li>
                                </ul>
                            </div>

                            <div className="col-6 col-md-3">

                                <ul className="list-footer">
                                    <li><p> <strong>SITES</strong></p></li>
                                    <li><a href="#">Lorem, ipsum.</a></li>
                                    <li><a href="#">Lorem, ipsum.</a></li>
                                    <li><a href="#">Lorem, ipsum dolor.</a></li>
                                    <li><a href="#">Lorem, ipsum dolor.</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src="public/dc-logo-bg.png" alt="Immagine Destra" className="img-fluid w-75" />
                    </div>
                </div>


                <div className="footer-bottom w-100">
                    <div className="container">
                        <div className="row align-items-center py-3">
                            <div className="col-md-6">
                                <button className="btn btn-primary">Iscriviti</button>
                            </div>
                            <div className="col-md-6 d-flex align-items-center justify-content-end">
                                <h3 className="me-3 mb-0">FOLLOW US:</h3>
                                <img src="public/footer-facebook.png" className="icon-img" alt="Icona 1" />
                                <img src="public/footer-twitter.png" className="icon-img" alt="Icona 2" />
                                <img src="public/footer-youtube.png" className="icon-img" alt="Icona 3" />
                                <img src="/public/footer-pinterest.png" className="icon-img" alt="Icona 4" />
                                <img src="public/footer-periscope.png" className="icon-img" alt="Icona 5" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </footer>

    )
}