import './App.css';
import DefaultLayout from './layouts/DefaultLayout';
import List from './pages/BlogPost/List';

const App = () => {
	return (
		<DefaultLayout>
			<List />
		</DefaultLayout>
	);
};

export default App;
