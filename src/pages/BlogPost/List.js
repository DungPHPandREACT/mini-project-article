import { Empty, notification, Pagination } from 'antd';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDeletePost, useGetPosts } from '../../apis/posts.api';
import CardBlogPost from '../../components/CardBlogPost';

const List = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const [pageCurrent, setPageCurrent] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	const [category, setCategory] = useState('null');

	const _category = searchParams.get('_category');
	const _page = searchParams.get('_page') ?? 1;
	const _per_page = searchParams.get('_per_page') ?? 10;

	const queryParams = {
		category: category,
		_page: pageCurrent,
		_per_page: pageSize,
	};

	console.log('queryParams: ', queryParams);

	const { data } = useGetPosts(queryParams);
	const { mutate: deletePost } = useDeletePost({
		queryParams,
		handleSuccess: () => {
			notification.open({
				message: `Xóa bài viết thành công`,
				type: 'success',
			});
		},
		handleError: (error) => {
			notification.open({
				message: `Xóa bài viết thành công`,
				type: 'error',
			});
		},
	});

	const posts = data?.data ?? data ?? [];
	const totalPosts = data?.items;

	useEffect(() => {
		setPageCurrent(_page);
		setPageSize(_per_page);
		setCategory(_category);
	}, [_page, _per_page, _category]);

	return (
		<div className='container'>
			<div className='row'>
				{/* Blog entries*/}
				<div className='col-lg-8'>
					{posts.length === 0 ? (
						<Empty
							description='Chưa có bài viết'
							imageStyle={{ width: '300px', height: '200px', margin: 'auto' }}
						/>
					) : (
						<div className='row'>
							{posts.map((blogPost, index) => {
								return (
									<div
										key={`blog-post-${index}`}
										className={index === 0 ? 'col-lg-12' : 'col-lg-6'}
									>
										<CardBlogPost
											id={blogPost.id}
											title={blogPost.title}
											content={blogPost.content}
											createdAt={blogPost.createdAt}
											deletePost={deletePost}
										/>
									</div>
								);
							})}
						</div>
					)}

					<div className='d-flex my-4 justify-content-center'>
						<Pagination
							total={totalPosts}
							current={pageCurrent}
							pageSize={pageSize}
							onChange={(page, perPage) => {
								setPageCurrent(page);
								setPageSize(perPage);

								let newSearchParams = {};

								if (category) {
									newSearchParams['_category'] = category;
								}

								newSearchParams = {
									...newSearchParams,
									_page: page,
									_per_page: perPage,
								};

								setSearchParams(newSearchParams);
							}}
						/>
					</div>
				</div>
				{/* Side widgets*/}
				<div className='col-lg-4'>
					{/* Search widget*/}
					<div className='card mb-4'>
						<div className='card-header'>Search</div>
						<div className='card-body'>
							<div className='input-group'>
								<input
									className='form-control'
									type='text'
									placeholder='Tìm kiếm theo tiêu đề bài viết...'
								/>
								<button
									className='btn btn-primary'
									id='button-search'
									type='button'
								>
									Tìm kiếm
								</button>
							</div>
						</div>
					</div>
					{/* Categories widget*/}
					<div className='card mb-4'>
						<div className='card-header'>Categories</div>
						<div className='card-body'>
							<div className='row'>
								<div className='col-sm-6'>
									<ul className='list-unstyled mb-0'>
										<li
											style={{
												cursor: 'pointer',
												color: 'blue',
												textDecoration: 'underline',
											}}
											onClick={() => {
												setCategory(null);
												setSearchParams({
													_page: 1,
													_per_page: pageSize,
												});
											}}
										>
											Tất cả
										</li>
										<li
											style={{
												cursor: 'pointer',
												color: 'blue',
												textDecoration: 'underline',
											}}
											onClick={() => {
												setCategory('html');
												setSearchParams({
													_category: 'html',
													_page: 1,
													_per_page: pageSize,
												});
											}}
										>
											HTML
										</li>
										<li
											style={{
												cursor: 'pointer',
												color: 'blue',
												textDecoration: 'underline',
											}}
											onClick={() => {
												setCategory('css');
												setSearchParams({
													_category: 'css',
													_page: 1,
													_per_page: pageSize,
												});
											}}
										>
											CSS
										</li>
										<li
											style={{
												cursor: 'pointer',
												color: 'blue',
												textDecoration: 'underline',
											}}
											onClick={() => {
												setCategory('ui_ux');
												setSearchParams({
													_category: 'ui_ux',
													_page: 1,
													_per_page: pageSize,
												});
											}}
										>
											UI/UX
										</li>
									</ul>
								</div>
								<div className='col-sm-6'>
									<ul className='list-unstyled mb-0'>
										<li
											style={{
												cursor: 'pointer',
												color: 'blue',
												textDecoration: 'underline',
											}}
											onClick={() => {
												setCategory('javascript');
												setSearchParams({
													_category: 'javascript',
													_page: 1,
													_per_page: pageSize,
												});
											}}
										>
											Javascript
										</li>
										<li
											style={{
												cursor: 'pointer',
												color: 'blue',
												textDecoration: 'underline',
											}}
											onClick={() => {
												setCategory('reactjs');
												setSearchParams({
													_category: 'reactjs',
													_page: 1,
													_per_page: pageSize,
												});
											}}
										>
											ReactJS
										</li>
										<li
											style={{
												cursor: 'pointer',
												color: 'blue',
												textDecoration: 'underline',
											}}
											onClick={() => {
												setCategory('nodejs');
												setSearchParams({
													_category: 'nodejs',
													_page: 1,
													_per_page: pageSize,
												});
											}}
										>
											NodeJS
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default List;
