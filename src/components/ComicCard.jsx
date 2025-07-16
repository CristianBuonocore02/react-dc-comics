
export default function ComicCard({ title, thumb }) {
    return (
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
            <div className="thumb-wrapper">
                <img src={thumb} alt={title} className="img-fluid" />
            </div>
            <h6 className="text-white mt-2">{title}</h6>
        </div>
    );
}
