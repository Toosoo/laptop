import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas
        camera={{
            fov: 50,
            near: 0.1,
            far: 2000,
            position: [ -3, 1.5, 4 ]
        }}
    >

    <App />
    </Canvas>
  </React.StrictMode>,
)
