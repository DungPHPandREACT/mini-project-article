import { useState } from 'react';
import './App.css';
import AuthContext from './contexts/AuthContext';
import DefaultLayout from './layouts/DefaultLayout';
import List from './pages/BlogPost/List';

const App = () => {
	const [userCurrent, setUserCurrent] = useState(() => {
		const userLoggined = JSON.parse(localStorage.getItem('user'));
		if (userLoggined) {
			return userLoggined;
		}

		return null;
	});

	return (
		<AuthContext.Provider
			value={{
				userCurrent: userCurrent,
				onChangeUserCurrent: setUserCurrent,
			}}
		>
			<DefaultLayout>
				<List />
			</DefaultLayout>
		</AuthContext.Provider>
	);
};

export default App;
