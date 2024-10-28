export default function Resume() {
    return (
        <>
            <article className="resume active" data-page="resume">
                <header>
                    <h2 className="h2 article-title">Resume</h2>
                </header>
                <section className="timeline">
                    <div className="title-wrapper">
                        <div className="icon-box">
                            <ion-icon name="book-outline" />
                        </div>
                        <h3 className="h3">Education</h3>
                    </div>
                    <ol className="timeline-list">
                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">
                                La Verdad Christian College
                            </h4>
                            <span>2022 — 2026</span>
                        </li>
                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">
                                Sangley Point Senior High School
                            </h4>
                            <span>2019 — 2021</span>
                        </li>
                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">
                                Puro National High School 
                            </h4>
                            <span>2015 — 2019</span>
                        </li>
                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">
                                Carmona Elementary School
                            </h4>
                            <span>2009 — 2015</span>
                        </li>
                    </ol>
                </section>
                <section className="timeline">
                    <div className="title-wrapper">
                        <div className="icon-box">
                            <ion-icon name="book-outline" />
                        </div>
                        <h3 className="h3">Experience</h3>
                    </div>
                    <ol className="timeline-list">
                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">Project Manager</h4>
                            <span>2015 — Present</span>
                            <p className="timeline-text">
                            Knowledge of Agile methodologies and software development life cycle. 
                            Experience with testing frameworks and debugging techniques.
                            </p>
                        </li>
                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">Software Engineer</h4>
                            <span>2013 — 2015</span>
                            <p className="timeline-text">
                                <b>Java: </b> Proficient in object-oriented programming, data structures, 
                                and algorithms. <br />
                                <b> JavaScript: </b> Experienced in web development, including frameworks 
                                like React or Node.js. <br />
                                <b>Python: </b>  Skilled in scripting, automation, and data analysis using libraries 
                                such as Pandas and NumPy.
                            </p>
                        </li>
                    </ol>
                </section>

            </article>
        </>
    )
}