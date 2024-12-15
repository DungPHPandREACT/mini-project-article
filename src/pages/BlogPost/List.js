import CardBlogPost from '../../components/CardBlogPost';

const List = () => {
	const blogPosts = [
		{
			title: 'Bài viết nổi bật',
			description: 'Đây là mô tả bài viết nổi bật',
			createdAt: '10-11-2024',
		},
		{
			title: 'Blog post 1',
			description: 'Đây là mô tả bài viết blog post 1',
			createdAt: '09-11-2024',
		},
		{
			title: 'Blog post 2',
			description: 'Đây là mô tả bài viết blog post 2',
			createdAt: '10-11-2024',
		},
		{
			title: 'Blog post 3',
			description: 'Đây là mô tả bài viết blog post 3',
			createdAt: '10-11-2024',
		},
		{
			title: 'Blog post 4',
			description: 'Đây là mô tả bài viết blog post 4',
			createdAt: '10-11-2024',
		},
		{
			title: 'Blog post 5',
			description: 'Đây là mô tả bài viết blog post 5',
			createdAt: '10-11-2024',
		},
		{
			title: 'Blog post 6',
			description: 'Đây là mô tả bài viết blog post 6',
			createdAt: '10-11-2024',
		},
	];

	return (
		<div className='container'>
			<div className='row'>
				{/* Blog entries*/}
				<div className='col-lg-8'>
					{/* Nested row for non-featured blog posts*/}
					<div className='row'>
						{blogPosts.map((blogPost, index) => {
							return (
								<div
									key={`blog-post-${index}`}
									className={index === 0 ? 'col-lg-12' : 'col-lg-6'}
								>
									<CardBlogPost
										title={blogPost.title}
										description={blogPost.description}
										createdAt={blogPost.createdAt}
									/>
								</div>
							);
						})}
					</div>
					{/* Pagination*/}
					<nav aria-label='Pagination'>
						<hr className='my-0' />
						<ul className='pagination justify-content-center my-4'>
							<li className='page-item disabled'>
								<a
									className='page-link'
									href='#'
									tabIndex={-1}
									aria-disabled='true'
								>
									Newer
								</a>
							</li>
							<li className='page-item active' aria-current='page'>
								<a className='page-link' href='#!'>
									1
								</a>
							</li>
							<li className='page-item'>
								<a className='page-link' href='#!'>
									2
								</a>
							</li>
							<li className='page-item'>
								<a className='page-link' href='#!'>
									3
								</a>
							</li>
							<li className='page-item disabled'>
								<a className='page-link' href='#!'>
									...
								</a>
							</li>
							<li className='page-item'>
								<a className='page-link' href='#!'>
									15
								</a>
							</li>
							<li className='page-item'>
								<a className='page-link' href='#!'>
									Older
								</a>
							</li>
						</ul>
					</nav>
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
									placeholder='Enter search term...'
									aria-label='Enter search term...'
									aria-describedby='button-search'
								/>
								<button
									className='btn btn-primary'
									id='button-search'
									type='button'
								>
									Go!
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
										<li>
											<a href='#!'>Web Design</a>
										</li>
										<li>
											<a href='#!'>HTML</a>
										</li>
										<li>
											<a href='#!'>Freebies</a>
										</li>
									</ul>
								</div>
								<div className='col-sm-6'>
									<ul className='list-unstyled mb-0'>
										<li>
											<a href='#!'>JavaScript</a>
										</li>
										<li>
											<a href='#!'>CSS</a>
										</li>
										<li>
											<a href='#!'>Tutorials</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					{/* Side widget*/}
					<div className='card mb-4'>
						<div className='card-header'>Side Widget</div>
						<div className='card-body'>
							You can put anything you want inside of these side widgets. They
							are easy to use, and feature the Bootstrap 5 card component!
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default List;
