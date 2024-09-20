const RatingSection = () => {
    return (
        <>
        <div className="w-42 mt-2 flex gap-1 font-thin">
            {[...Array(5)].map((_, i) => (
                <img key={i} className="h-5" src="public/images/star.svg" alt="Star Rating" />
            ))}
            <p>4.8 / 5</p>
           
        </div>
        <div><p>based on 910 reviews</p></div>
        </>
    );
};

export default RatingSection;
