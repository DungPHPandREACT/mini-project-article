import { useState } from 'react';
import ModalAuthentication from '../components/ModalAuthentication';

const Navbar = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [status, setStatus] = useState('register');

	const handleOpenModal = (stt) => {
		setIsOpenModal(true);
		setStatus(stt);
	};

	const handleCloseModal = () => {
		setIsOpenModal(false);
	};

	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<div className='container'>
				<a className='navbar-brand' href='#!'>
					My-Blog
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon' />
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
						{/* Chưa đăng nhập */}
						<li className='nav-item'>
							<span
								className='nav-link'
								style={{ cursor: 'pointer' }}
								onClick={() => handleOpenModal('register')}
							>
								Đăng ký
							</span>
						</li>
						<li className='nav-item'>
							<span
								className='nav-link'
								style={{ cursor: 'pointer' }}
								onClick={() => handleOpenModal('login')}
							>
								Đăng nhập
							</span>
						</li>
						<ModalAuthentication
							open={isOpenModal}
							status={status}
							handleCloseModal={handleCloseModal}
						/>
						{/* Đã đăng nhập */}
						{/* <li className='nav-item'>
							<span className='nav-link' style={{ cursor: 'pointer' }}>
								Tạo bài viết
							</span>
						</li>
						<Avatar
							style={{
								backgroundColor: 'lightskyblue',
								verticalAlign: 'middle',
							}}
							size='large'
						>
							D
						</Avatar> */}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
