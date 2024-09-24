
// @note imgURL is actually an object that contains the thumbnail and bigShoe properties
// bigShoeImg, on the other hand, is a string, see changeBigShoeImage(imgURL.bigShoe)
const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {

    const handleClick = () => {
        if (bigShoeImg !== imgURL.bigShoe) { changeBigShoeImage(imgURL.bigShoe) }
    }

    return (
        <div className={`border-2 rounded-xl 
        ${bigShoeImg === imgURL.bigShoe
                ? 'border-coral-red'
                : 'border-transparent'
            } cursor-pointer max-sm:flex-1
        `}
            onClick={handleClick}
        >

            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <img
                    src={imgURL.thumbnail}
                    alt="shoe collection"
                    width={127}
                    height={103}
                    className="object-contain"
                />
            </div>

        </div>
    );
};

export default ShoeCard