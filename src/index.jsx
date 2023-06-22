import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { YtProvider } from './YtContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <YtProvider>
        <App />
    </YtProvider>
)
