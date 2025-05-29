import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { DrinksResponse } from "../../types/drinks";

export const drinksApi = createApi({
  reducerPath: "drinksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.thecocktaildb.com/api/json/v1/1/",
  }),
  endpoints: (builder) => ({
    getDrinks: builder.query<DrinksResponse, string|void>({
      query: (searchTerm = "margarita") => `search.php?s=${searchTerm}`,
    }),
  }),
});

export const { useGetDrinksQuery } = drinksApi;