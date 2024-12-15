import { Avatar } from "antd";

const Navbar = () => {
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
							<span className='nav-link' style={{ cursor: 'pointer' }}>
								Đăng ký
							</span>
						</li>
						<li className='nav-item'>
							<span className='nav-link' style={{ cursor: 'pointer' }}>
								Đăng nhập
							</span>
						</li>
						{/* Đã đăng nhập */}
						<li className='nav-item'>
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
						</Avatar>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
