const CardBlogPost = ({
	title = 'Tiêu đề mặc định destructuring',
	description,
	createdAt,
}) => {
	return (
		<div className='card mb-4'>
			<a href='#!'>
				<img
					className='card-img-top'
					src='https://dummyimage.com/700x350/dee2e6/6c757d.jpg'
					alt='...'
				/>
			</a>
			<div className='card-body'>
				<div className='small text-muted'>{createdAt}</div>
				<h2 className='card-title h4'>{title}</h2>
				<p className='card-text'>{description}</p>
				<a className='btn btn-primary' href='#!'>
					Read more →
				</a>
			</div>
		</div>
	);
};

export default CardBlogPost;
