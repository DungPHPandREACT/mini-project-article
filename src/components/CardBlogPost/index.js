import { Button } from 'antd';

const CardBlogPost = ({
	id,
	title = 'Tiêu đề mặc định destructuring',
	content,
	createdAt,
	deletePost,
}) => {
	const handleDeletePost = () => {
		deletePost(id);
	};

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
				<p className='card-text'>{content}</p>

				<Button danger onClick={handleDeletePost}>
					Xóa bài viết
				</Button>
			</div>
		</div>
	);
};

export default CardBlogPost;
