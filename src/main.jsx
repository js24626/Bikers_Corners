import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import ChatBotButton from "./components/ChatBotButton";

import App from './App.jsx'
document.body.style.fontFamily = '"Archivo Black", sans-serif';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
     <ChatBotButton />
  </StrictMode>,
)
