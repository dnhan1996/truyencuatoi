import React from "react"
import { Route, Routes } from "react-router-dom"
import SignIn from "./pages/SignIn"
import ChapNovel from "./pages/ChapNovel"
import Details from "./pages/Details"
import Index from "./pages/Index"
import SignUp from "./pages/SignUp"

export default function Pages(){
    return <>
        <Routes>
            <Route path="/index" element={<Index />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/truyen/:novelId" element={<Details/>} />
            <Route path="/chuong/:chapId" element={<ChapNovel/>} />
        </Routes>
    </>
}