const ImageSection = ({ imgSrc, imgAlt }) => {
    return (
        <div className="h-auto w-full lg:w-[650px] p-4 lg:p-0">
            <img className="h-full w-full" src={imgSrc} alt={imgAlt} />
        </div>
    );
};

export default ImageSection;
