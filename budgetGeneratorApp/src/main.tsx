import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import ModalProvider from './context/ModalProvider.tsx'
import DataProvider from './context/data/DataProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <ModalProvider>
    <DataProvider>
      <App />      
    </DataProvider>
  </ModalProvider>,
)