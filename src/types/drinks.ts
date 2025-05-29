
export interface DrinksCardType {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export interface DrinksResponse {
  drinks: DrinksCardType[];
}

export interface SearchBarProps{
    onSearch:(value:string) => void;
}