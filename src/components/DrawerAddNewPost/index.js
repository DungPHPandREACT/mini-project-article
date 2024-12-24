import {
	Button,
	Col,
	Drawer,
	Form,
	Input,
	notification,
	Row,
	Select,
	Space,
} from 'antd';
import { useFormik } from 'formik';
import React from 'react';
import { useCreatePost } from '../../apis/posts.api';

const DrawerAddNewPost = ({ onClose, open }) => {
	const categories = [
		// HTML, CSS, JAVSCRIPT, NODEJS, REACTJS
		{
			value: 'html',
			label: 'HTML',
		},
		{
			value: 'css',
			label: 'CSS',
		},
		{
			value: 'ui_ux',
			label: 'UI/UX',
		},
		{
			value: 'javascript',
			label: 'Javascript',
		},
		{
			value: 'reactjs',
			label: 'ReactJS',
		},
		{
			value: 'nodejs',
			label: 'NodeJS',
		},
	];

	const [api, contextHolder] = notification.useNotification();

	const { mutate: createPost } = useCreatePost({
		handleSuccess: () => {
			api.success({
				message: `Tạo bài viết thành công`,
				placement: 'topRight',
			});

			formBlog.handleReset();
			onClose();
		},
		handleError: (error) => {
			api.error({
				message: `Tạo bài viết thất bại`,
				description: error,
				placement: 'topRight',
			});
		},
	});

	const formBlog = useFormik({
		initialValues: {
			title: '',
			image: '',
			category: '',
			content: '',
		},
		onSubmit: (values) => {
			let timeCurrent = new Date();
			const dd = String(timeCurrent.getDate()).padStart(2, '0');
			const mm = String(timeCurrent.getMonth() + 1).padStart(2, '0');
			const yyyy = timeCurrent.getFullYear();

			timeCurrent = mm + '-' + dd + '-' + yyyy;

			const newPost = { ...values, createdAt: timeCurrent };

			createPost(newPost);
		},
	});

	return (
		<Drawer
			title='Thêm bài viết mới'
			onClose={onClose}
			open={open}
			maskClosable={false}
			width='100%'
			extra={
				<Space>
					<Button onClick={onClose}>Hủy</Button>
					<Button type='primary' onClick={formBlog.handleSubmit}>
						Tạo bài viết mới
					</Button>
				</Space>
			}
		>
			{contextHolder}
			<Form layout='vertical'>
				<Row gutter={20}>
					<Col span={12}>
						<Form.Item label='Tiêu đề:'>
							<Input
								placeholder='Nhập tiêu đề...'
								name='title'
								value={formBlog.values.title}
								onChange={formBlog.handleChange}
							/>
						</Form.Item>
					</Col>
					<Col span={24}>
						<Row gutter={20}>
							<Col span={12}>
								<Form.Item label='Đường dẫn ảnh minh họa:'>
									<Input
										placeholder='Nhập đường dẫn ảnh minh họa...'
										name='image'
										value={formBlog.values.image}
										onChange={formBlog.handleChange}
									/>
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item label='Danh mục bài viết:'>
									<Select
										options={categories}
										name='category'
										value={formBlog.values.category}
										onChange={(option) => {
											formBlog.setFieldValue('category', option);
										}}
									/>
								</Form.Item>
							</Col>
						</Row>
					</Col>
					<Col span={24}>
						<Form.Item label='Nội dung bài viết:'>
							<Input.TextArea
								placeholder='Nhập nội dung bài viết...'
								name='content'
								rows={10}
								value={formBlog.values.content}
								onChange={formBlog.handleChange}
							/>
						</Form.Item>
					</Col>
				</Row>
			</Form>
		</Drawer>
	);
};

export default DrawerAddNewPost;
