export default function Portfolio() {
    return (
        <>
            <article className="portfolio active" data-page="portfolio">
                <header>
                    <h2 className="h2 article-title">Portfolio</h2>
                </header>
                <section className="projects">
                    <div className="filter-select-box">
                        <button className="filter-select" data-select="">
                            <div className="select-value" data-selecct-value="">
                                Select category
                            </div>
                            <div className="select-icon">
                                <ion-icon name="chevron-down" />
                            </div>
                        </button>
                        
                    </div>
                    <ul className="project-list">
                        <li
                            className="project-item  active"
                            data-filter-item=""
                            data-category="web development"
                        >
                            <a href="#">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline" />
                                    </div>
                                    <img
                                        src="./assets/images/project-1.jpg"
                                        alt="finance"
                                        loading="lazy"
                                    />
                                </figure>
                                <h3 className="project-title">Finance</h3>
                                <p className="project-category">Web development</p>
                            </a>
                        </li>
                        <li
                            className="project-item  active"
                            data-filter-item=""
                            data-category="web development"
                        >
                            <a href="#">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline" />
                                    </div>
                                    <img
                                        src="./assets/images/project-2.png"
                                        alt="orizon"
                                        loading="lazy"
                                    />
                                </figure>
                                <h3 className="project-title">Orizon</h3>
                                <p className="project-category">Web development</p>
                            </a>
                        </li>
                        <li
                            className="project-item  active"
                            data-filter-item=""
                            data-category="web design"
                        >
                            <a href="#">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline" />
                                    </div>
                                    <img
                                        src="./assets/images/project-3.jpg"
                                        alt="fundo"
                                        loading="lazy"
                                    />
                                </figure>
                                <h3 className="project-title">Fundo</h3>
                                <p className="project-category">Web design</p>
                            </a>
                        </li>
                        <li
                            className="project-item  active"
                            data-filter-item=""
                            data-category="applications"
                        >
                            <a href="#">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline" />
                                    </div>
                                    <img
                                        src="./assets/images/project-4.png"
                                        alt="brawlhalla"
                                        loading="lazy"
                                    />
                                </figure>
                                <h3 className="project-title">Brawlhalla</h3>
                                <p className="project-category">Applications</p>
                            </a>
                        </li>
                        <li
                            className="project-item  active"
                            data-filter-item=""
                            data-category="web design"
                        >
                            <a href="#">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline" />
                                    </div>
                                    <img
                                        src="./assets/images/project-5.png"
                                        alt="dsm."
                                        loading="lazy"
                                    />
                                </figure>
                                <h3 className="project-title">DSM.</h3>
                                <p className="project-category">Web design</p>
                            </a>
                        </li>
                        <li
                            className="project-item  active"
                            data-filter-item=""
                            data-category="web design"
                        >
                            <a href="#">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline" />
                                    </div>
                                    <img
                                        src="./assets/images/project-6.png"
                                        alt="metaspark"
                                        loading="lazy"
                                    />
                                </figure>
                                <h3 className="project-title">MetaSpark</h3>
                                <p className="project-category">Web design</p>
                            </a>
                        </li>
                        <li
                            className="project-item  active"
                            data-filter-item=""
                            data-category="web development"
                        >
                            <a href="#">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline" />
                                    </div>
                                    <img
                                        src="./assets/images/project-7.png"
                                        alt="summary"
                                        loading="lazy"
                                    />
                                </figure>
                                <h3 className="project-title">Summary</h3>
                                <p className="project-category">Web development</p>
                            </a>
                        </li>
                        <li
                            className="project-item  active"
                            data-filter-item=""
                            data-category="applications"
                        >
                            <a href="#">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline" />
                                    </div>
                                    <img
                                        src="./assets/images/project-8.jpg"
                                        alt="task manager"
                                        loading="lazy"
                                    />
                                </figure>
                                <h3 className="project-title">Task Manager</h3>
                                <p className="project-category">Applications</p>
                            </a>
                        </li>
                        <li
                            className="project-item  active"
                            data-filter-item=""
                            data-category="web development"
                        >
                            <a href="#">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline" />
                                    </div>
                                    <img
                                        src="./assets/images/project-9.png"
                                        alt="arrival"
                                        loading="lazy"
                                    />
                                </figure>
                                <h3 className="project-title">Arrival</h3>
                                <p className="project-category">Web development</p>
                            </a>
                        </li>

                        <li
                            className="project-item  active"
                            data-filter-item=""
                            data-category="web development"
                        >
                            <a href="https://know-thy-coffee.vercel.app/">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline" />
                                    </div>
                                    <img
                                        src="./assets/images/project-additional-1.JPG"
                                        alt="arrival"
                                        loading="lazy"
                                    />
                                </figure>
                                <h3 className="project-title">Know Thy Coffee</h3>
                                <p className="project-category">Blog</p>
                            </a>
                        </li>

                        <li
                            className="project-item  active"
                            data-filter-item=""
                            data-category="web development"
                        >
                            <a href="https://pathfinder4.vercel.app/">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline" />
                                    </div>
                                    <img
                                        src="./assets/images/project-additional-2.JPG"
                                        alt="arrival"
                                        loading="lazy"
                                    />
                                </figure>
                                <h3 className="project-title">PathFinder</h3>
                                <p className="project-category">Web development</p>
                            </a>
                        </li>

                        <li
                            className="project-item  active"
                            data-filter-item=""
                            data-category="web development"
                        >
                            <a href="https://web-simmons.vercel.app/">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline" />
                                    </div>
                                    <img
                                        src="./assets/images/project-additional-3.JPG"
                                        alt="arrival"
                                        loading="lazy"
                                    />
                                </figure>
                                <h3 className="project-title">Simmons</h3>
                                <p className="project-category">Promotional</p>
                            </a>
                        </li>
                    </ul>
                </section>
            </article>
        </>
    )
}