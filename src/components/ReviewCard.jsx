import { star } from "../assets/icons"
import { CustomerReviews } from "../sections"



const ReviewCard = ({ customerName, feedback, imgURL, rating }) => {
    return (
        <div className="flex flex-col items-center">
            <img
                src={imgURL}
                alt="customer"
                className="rounded-full object-cover w-[120px] h-[120px]"
            />

            <div className="mt-6 max-w-sm text-center info-text">{feedback}</div>

            <div className="mt-3 flex justify-center items-center gap-2.5">
                <img
                    src={star}
                    width={24}
                    height={24}
                    className="object-contain"
                />
                <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
            </div>

            <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>

        </div>
    )
}

export default ReviewCard