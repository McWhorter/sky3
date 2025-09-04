import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRegistry } from 'react-native-web'
import './index.css'
import App from './App.tsx'

// Register the app for React Native Web
AppRegistry.registerComponent('App', () => App)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
