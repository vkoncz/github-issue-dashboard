import { ApolloProvider } from '@apollo/client/react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { client } from './graphql-client/apollo-client.config';
import reportWebVitals from './reportWebVitals';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // <React.StrictMode> //Workaround for ag-grid bug: https://github.com/ag-grid/ag-grid/issues/4850
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
