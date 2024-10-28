export default function Gallery() {
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
                            <figure className="project-img">
                                {/* <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline" />
                                </div> */}
                                <img
                                    src="./assets/images/gallery-image-1.jpg"
                                    alt="finance"
                                    loading="lazy"
                                />
                            </figure>
                            <h3 className="project-title">Silhoutte</h3>
                            <p className="project-category">Photography</p>
                        </li>
                        <li
                            className="project-item  active"
                            data-filter-item=""
                            data-category="web development"
                        >
                            <figure className="project-img">
                                {/* <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline" />
                                </div> */}
                                <img
                                    src="./assets/images/gallery-image-2.jpg"
                                    alt="finance"
                                    loading="lazy"
                                />
                            </figure>
                            <h3 className="project-title">Mi Amores</h3>
                            <p className="project-category">Photography</p>
                        </li>
                        <li
                            className="project-item  active"
                            data-filter-item=""
                            data-category="web development"
                        >
                            <figure className="project-img">
                                {/* <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline" />
                                </div> */}
                                <img
                                    src="./assets/images/gallery-image-3.jpg"
                                    alt="finance"
                                    loading="lazy"
                                />
                            </figure>
                            <h3 className="project-title">Silhoutte</h3>
                            <p className="project-category">Photography</p>
                        </li>
                        <li
                            className="project-item  active"
                            data-filter-item=""
                            data-category="web development"
                        >
                            <figure className="project-img">
                                {/* <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline" />
                                </div> */}
                                <img
                                    src="./assets/images/gallery-image-4.jpg"
                                    alt="finance"
                                    loading="lazy"
                                />
                            </figure>
                            <h3 className="project-title">Sunset</h3>
                            <p className="project-category">Photography</p>
                        </li>
                        <li
                            className="project-item  active"
                            data-filter-item=""
                            data-category="web development"
                        >
                            <figure className="project-img">
                                {/* <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline" />
                                </div> */}
                                <img
                                    src="./assets/images/gallery-image-5.jpg"
                                    alt="finance"
                                    loading="lazy"
                                />
                            </figure>
                            <h3 className="project-title">Her cat</h3>
                            <p className="project-category">Photography</p>
                        </li>
                        <li
                            className="project-item  active"
                            data-filter-item=""
                            data-category="web development"
                        >
                            <figure className="project-img">
                                {/* <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline" />
                                </div> */}
                                <img
                                    src="./assets/images/gallery-image-6.jpg"
                                    alt="finance"
                                    loading="lazy"
                                />
                            </figure>
                            <h3 className="project-title">Mirror Shot</h3>
                            <p className="project-category">Photography</p>
                        </li>
                        <li
                            className="project-item  active"
                            data-filter-item=""
                            data-category="web development"
                        >
                            <figure className="project-img">
                                {/* <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline" />
                                </div> */}
                                <img
                                    src="./assets/images/gallery-image-7.jpg"
                                    alt="finance"
                                    loading="lazy"
                                />
                            </figure>
                            <h3 className="project-title">Scenery</h3>
                            <p className="project-category">Photography</p>
                        </li>
                        <li
                            className="project-item  active"
                            data-filter-item=""
                            data-category="web development"
                        >
                            <figure className="project-img">
                                {/* <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline" />
                                </div> */}
                                <img
                                    src="./assets/images/gallery-image-8.jpg"
                                    alt="finance"
                                    loading="lazy"
                                />
                            </figure>
                            <h3 className="project-title">Cat</h3>
                            <p className="project-category">Photography</p>
                        </li>
                        <li
                            className="project-item  active"
                            data-filter-item=""
                            data-category="web development"
                        >
                            <figure className="project-img">
                                {/* <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline" />
                                </div> */}
                                <img
                                    src="./assets/images/gallery-image-9.jpg"
                                    alt="finance"
                                    loading="lazy"
                                />
                            </figure>
                            <h3 className="project-title">Dog</h3>
                            <p className="project-category">Photography</p>
                        </li>
                        <li
                            className="project-item  active"
                            data-filter-item=""
                            data-category="web development"
                        >
                            <figure className="project-img">
                                {/* <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline" />
                                </div> */}
                                <img
                                    src="./assets/images/gallery-image-10.jpg"
                                    alt="finance"
                                    loading="lazy"
                                />
                            </figure>
                            <h3 className="project-title">Structures</h3>
                            <p className="project-category">Photography</p>
                        </li>
                        <li
                            className="project-item  active"
                            data-filter-item=""
                            data-category="web development"
                        >
                            <figure className="project-img">
                                {/* <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline" />
                                </div> */}
                                <img
                                    src="./assets/images/gallery-image-11.jpg"
                                    alt="finance"
                                    loading="lazy"
                                />
                            </figure>
                            <h3 className="project-title">Structures</h3>
                            <p className="project-category">Photography</p>
                        </li>
                        <li
                            className="project-item  active"
                            data-filter-item=""
                            data-category="web development"
                        >
                            <figure className="project-img">
                                {/* <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline" />
                                </div> */}
                                <img
                                    src="./assets/images/gallery-image-12.jpg"
                                    alt="finance"
                                    loading="lazy"
                                />
                            </figure>
                            <h3 className="project-title">Dog</h3>
                            <p className="project-category">Photography</p>
                        </li>
                        <li
                            className="project-item  active"
                            data-filter-item=""
                            data-category="web development"
                        >
                            <figure className="project-img">
                                {/* <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline" />
                                </div> */}
                                <img
                                    src="./assets/images/gallery-image-13.jpg"
                                    alt="finance"
                                    loading="lazy"
                                />
                            </figure>
                            <h3 className="project-title">Shot</h3>
                            <p className="project-category">Photography</p>
                        </li>
                        <li
                            className="project-item  active"
                            data-filter-item=""
                            data-category="web development"
                        >
                            <figure className="project-img">
                                {/* <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline" />
                                </div> */}
                                <img
                                    src="./assets/images/gallery-image-14.jpeg"
                                    alt="finance"
                                    loading="lazy"
                                />
                            </figure>
                            <h3 className="project-title">Group</h3>
                            <p className="project-category">Photography</p>
                        </li>
                        <li
                            className="project-item  active"
                            data-filter-item=""
                            data-category="web development"
                        >
                            <figure className="project-img">
                                {/* <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline" />
                                </div> */}
                                <img
                                    src="./assets/images/gallery-image-15.jpg"
                                    alt="finance"
                                    loading="lazy"
                                />
                            </figure>
                            <h3 className="project-title">Browny</h3>
                            <p className="project-category">Photography</p>
                        </li>
                        <li
                            className="project-item  active"
                            data-filter-item=""
                            data-category="web development"
                        >
                            <figure className="project-img">
                                {/* <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline" />
                                </div> */}
                                <img
                                    src="./assets/images/gallery-image-16.jpg"
                                    alt="finance"
                                    loading="lazy"
                                />
                            </figure>
                            <h3 className="project-title">Peach</h3>
                            <p className="project-category">Photography</p>
                        </li>
                    </ul>
                </section>
            </article>
        </>
    )
}