import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new QueryClient();

root.render(
	<QueryClientProvider client={client}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</QueryClientProvider>
);
