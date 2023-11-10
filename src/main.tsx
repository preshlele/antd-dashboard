import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import { ConfigProvider } from 'antd'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#32a8a8",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
