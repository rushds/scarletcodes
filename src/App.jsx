import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from "./pages/homepage.jsx";
import Success from "./pages/success.jsx";
import Login from "./pages/login.jsx";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { secret } from '@aws-amplify/backend';


const supabase = createClient("https://lyzekbquqgeumibpayyj.supabase.co", secret(VITE_SUPABASE_ANON_KEY));

export {supabase};

export const App = () => {
  console.log('app');
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/success" element={<Success />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};