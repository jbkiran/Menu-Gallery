import { useGetDrinksQuery } from "../store/api/apiSlice";
import type { DrinksCardType } from "../types/drinks";
import DrinksCard from "./DrinkCard";


const DrinkList = ({searchTerm}:{searchTerm:string}) => {

    const { data, isLoading, error, isFetching } = useGetDrinksQuery(searchTerm || "margarita");

    if (isLoading || isFetching) {
        return (
            <div className="gallery">
                {Array.from({ length: 10 }).map((_, i) => (
                    <div className="image-card skeleton" key={i}>
                    <div className="image-card-img skeleton-box"></div>
                    <div className="image-card-title">
                        <div className="image-card-titleInfo skeleton-box"></div>
                    </div>
                    </div>
                ))}
            </div>
        );
    }
    if (error) {
        return <div className="message">Error fetching drinks</div>;
    }

    if (!data?.drinks?.length) {
        return <div className="message">No drinks found</div>;
    }

    return (
        <div className="gallery">
            {data?.drinks.map((drink:DrinksCardType) => (
                
                <DrinksCard drinkData={drink} key={drink.idDrink} />
            ))}
        </div>
    );
}

export default DrinkList;