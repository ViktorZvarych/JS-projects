(() => {
    const menuRoot = document.getElementById('root'); //get html element for menu
    const menu = `<nav>
            <div class="navbar">
                <i class='bx bx-menu'></i>
                <div class="logo"><a href="/">My projects</a></div>
                <div class="nav-links">
                    <div class="sidebar-logo">
                        <span class="logo-name"></span>
                        <i class='bx bx-x'></i>
                    </div>
                    <ul class="links">
                        <li><a href="index.html">HOME</a></li>
                        <li>
                            <a href="#">HTML & CSS</a>
                            <i class='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
                            <ul class="htmlCss-sub-menu sub-menu">
                                <li><a href="#">Web Design</a></li>
                                <li><a href="#">Login Forms</a></li>
                                <li><a href="#">Card Design</a></li>

                            </ul>
                        </li>
                        <li>
                            <a href="#">JAVASCRIPT</a>
                            <i class='bx bxs-chevron-down js-arrow arrow '></i>
                            <ul class="js-sub-menu sub-menu">
                                <li><a href="#">?Dynamic Clock</a></li>
                                <li><a href="#">?Form Validation</a></li>
                                <li><a href="/projects/timer/timer.html">Timer</a></li>
                                <li><a href="/projects/counter/counter.html">Counter</a></li>
                                <li class="more">
                                    <span>
                                        <a href="/projects/color-flipper/simple.html">ColorFlipper</a>
                                        <i class='bx bxs-chevron-right arrow more-arrow'></i>
                                    </span>
                                    <ul class="more-sub-menu sub-menu">
                                        <li><a href="/projects/color-flipper/simple.html">Simple</a></li>
                                        <li><a href="/projects/color-flipper/hex.html">Hex</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">?REACT</a>
                            <i class='bx bxs-chevron-down js-arrow arrow '></i>
                            
                        </li>
                        <li><a href="#">?CONTACT ME</a></li>
                    </ul>
                </div>
                <div class="search-box">
                    <i class='bx bx-search'></i>
                    <div class="input-box">
                        <input type="text" placeholder="Search...">
                    </div>
                </div>
            </div>
        </nav>`;
    
    menuRoot.innerHTML = menu;
})();