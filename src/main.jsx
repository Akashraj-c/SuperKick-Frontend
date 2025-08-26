import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
<GoogleOAuthProvider clientId='914096697010-gk6od5gmmigj8qv4t1cdfk3e0aub2t8v.apps.googleusercontent.com'>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
</GoogleOAuthProvider>
)
