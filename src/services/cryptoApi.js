import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '45123137dfmsh8dc2e63c8e22d07p1699cajsn62e17d80cb3f'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
      getCryptos: builder.query({
          query: (count) => createRequest(`/coins?limit=${count}`)
      })   
    })
})

export const {
    useGetCryptosQuery
} = cryptoApi;