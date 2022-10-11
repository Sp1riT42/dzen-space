import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authorizationHeaders = (headers: Headers) => headers;

export const flickrApi = createApi({
	reducerPath: 'flickrApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.flickr.com/services/rest/',
		prepareHeaders: authorizationHeaders,
	}),
	endpoints: build => ({
		getPhotos: build.query<any, void>({
			query: () => ({
				url: '',
				params: {
					method: 'flickr.photos.search',
					api_key: 'ad68b13dcdf275cc53614542e7e711e9',
					nojsoncallback: 1,
					format: 'json',
					tags: 'landscape',
					media: 'photos',
					extras: ['original_format,url_o'],
				},
			}),
		}),
	}),
});

export const { useGetPhotosQuery } = flickrApi;
