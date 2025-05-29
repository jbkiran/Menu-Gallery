import type { DrinksCardType } from "../types/drinks";

const DrinksCard = ({drinkData}:{drinkData:DrinksCardType}) => {

    return (
        <div className="image-card">
            <img src={drinkData.strDrinkThumb} className="image-card-img" />
            <div className="image-card-title">
                <p className="image-card-titleInfo">{drinkData.strDrink}</p>

            </div>
        </div>
    );
}

export default DrinksCard;
