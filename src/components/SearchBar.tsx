import { useState } from "react";
import styles from "../assets/css/searchbar.module.css";
import type { SearchBarProps } from "../types/drinks";


export const SearchBar = ({onSearch}:SearchBarProps) => {

    const [searchTerm, setSearchTerm] = useState("margarita");

    const handleSearch = () => {
        onSearch(searchTerm.trim());
    }
    const handleClear = () => {
        setSearchTerm("");
        onSearch(""); 
    };

    return (

        <div className={styles.searchContainer}>
            <div className={styles.searchInputWrapper}>
                <input
                type="text"
                className={styles.searchInput}
                placeholder="Search Drinks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                   if(e.key == "Enter") handleSearch();
                }}
                />
                {searchTerm && (
                <button className={styles.clearIconButton} onClick={handleClear}>
                    &times;
                </button>
                )}
            </div>
            <button className={styles.searchButton} onClick={handleSearch}>
                Search
            </button>
        </div>
    );
}