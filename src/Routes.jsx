import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";

// PAGES \\
import Home from './pages/Home';

export default function AppRoutes() {
    const [ISMOBILE, setISMOBILE] = useState(/iphone|ipad|ipod|android|windows phone/i.test(navigator.userAgent));

    return (
        <Routes>
            <Route path="/" element={<Home isMobile={ISMOBILE} />} />
        </Routes>
    )
}