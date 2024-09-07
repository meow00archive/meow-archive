import React from 'react'
import './Menu.css'

const Category = () => {
    return (
        <div className="menu">
            <div className="menu-category">
                <ul>
                    <li><a href="/test/form">폼 형식</a></li>
                    <li><a href="/test/curl">curl 형식</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Category