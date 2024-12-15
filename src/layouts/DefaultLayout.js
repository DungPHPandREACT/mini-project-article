import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';

const DefaultLayout = (props) => {
	return (
		<div>
			<Navbar />
			<Header />
			{props.children}
			<Footer />
		</div>
	);
};

export default DefaultLayout;
