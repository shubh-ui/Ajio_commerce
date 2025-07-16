import { Star as StarIcon } from "lucide-react";

const StarRating = ({ rating, ratingCount }: { rating: string, ratingCount: string }) => {
    return (
        <>
            {rating && (
                <div className={`flex items-center text-white text-xs gap-1 p-1 rounded ${Number(rating) < 3 ? 'bg-[#a73535]' : 'bg-[#35a742]'}`}>
                    <div className="flex items-center gap-1"> 
                        {rating} <StarIcon fill="white" size={10} />
                    </div> 
                    <div>|</div>
                    <div>{ratingCount}</div>
                </div>
            )}
        </>
    );
};

export default StarRating;