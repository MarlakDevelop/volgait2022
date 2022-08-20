import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'assets/styles/main.sass'
import { ChakraProvider } from '@chakra-ui/react'

const container = document.getElementById('glasses-quiz-widget')
const root = ReactDOM.createRoot(container);
root.render(
  <ChakraProvider>
    <React.StrictMode>
      <App
        baseUrl={container.getAttribute('data-source')}
      />
    </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
