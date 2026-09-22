import { useState, Suspense, useEffect, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Meta } from "react-router-dom";
import './App.css'
import routeConfig from './route';

function App() {


  return (
    <>
        <Router basename={import.meta.env.VITE_APP_BASENAME || "/"}>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {routeConfig.map(({ path, element: Element }) => (
                        <Route
                            key={path}
                            path={path}
                            element={<Element />}
                        />
                    ))}
                </Routes>
            </Suspense>
        </Router>
    </>
  )
}

export default App;
