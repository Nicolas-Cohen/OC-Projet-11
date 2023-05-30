import React from 'react'
import {Link} from "react-router-dom"
import './ErrorStyle.css'


export default function Error() {
    return (
        <div className='ErrorPage'>
            <h1 className='TitleError'>404</h1>
            <p className='text-error'>The page you requested does not exist.</p>
            <Link to="/" className='ComeBack-Home-Error'>Return to the homepage.</Link>
        </div>
    )
}