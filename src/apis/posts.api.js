import axios from 'axios';
import { BASE_URL } from '../config';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const URL = {
	read: `${BASE_URL}/posts`,
	create: `${BASE_URL}/posts`,
	delete: `${BASE_URL}/posts/:id`,
};

const getPosts = (queryParams) => {
	return axios.get(URL.read, { params: queryParams });
};

const createPost = (newPost) => {
	return axios.post(URL.create, newPost);
};

const deletePost = (id) => {
	return axios.delete(URL.delete.replace(':id', id));
};

export const useCreatePost = ({ handleSuccess, handleError }) => {
	return useMutation({
		mutationFn: createPost,
		mutationKey: ['posts'],
		onSuccess: (data) => {
			handleSuccess(data);
		},
		onError: (error) => {
			handleError(error);
		},
	});
};

export const useGetPosts = (queryParams) => {
	return useQuery({
		queryFn: () => getPosts(queryParams),
		queryKey: ['posts', queryParams],
		staleTime: 10000,
		gcTime: 15000,

		select: (data) => data.data,
	});
};

export const useDeletePost = ({ queryParams, handleSuccess, handleError }) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (id) => deletePost(id),
		mutationKey: ['posts'],
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ['posts', queryParams] });
			handleSuccess(data);
		},
		onError: (error) => {
			handleError(error);
		},
	});
};
