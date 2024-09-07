import React from 'react'

const Header = ( props ) => {
    return (
        <header id="headerType" className={`header__wrap ${props.element}`}>
            <div className="header__inner">
                <div className="header__logo">
                    <a href="/">ZT API <em>테스트</em></a>
                </div>
                <nav className="header__menu">
                    <ul>
                        <li><a href="/list">API 목록</a></li>
                        <li><a href="/test">API 테스트</a></li>
                    </ul>
                </nav>
                <div className="header__member">
                    <a href="https://meow-archive.notion.site">관련 문서</a>
                </div>
            </div>
        </header>
    )
}

export default Header