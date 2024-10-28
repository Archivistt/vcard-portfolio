export default function Skills() {
    return (
        <>
            <article className="resume active" data-page="resume">
                <header>
                    <h2 className="h2 article-title">Skills</h2>
                    <section className="skill">
                        <ul className="skills-list content-card">
                            <li className="skills-item">
                                <div className="title-wrapper">
                                    <h5 className="h5">Web design: Using HTML and CSS</h5>
                                    <data value={80}>90%</data>
                                </div>
                                <div className="skill-progress-bg">
                                    <div className="skill-progress-fill" style={{ 'width': "90%" }} />
                                </div>
                            </li>
                            <li className="skills-item">
                                <div className="title-wrapper">
                                    <h5 className="h5">Database Management: PHP and SQL</h5>
                                    <data value={70}>80%</data>
                                </div>
                                <div className="skill-progress-bg">
                                    <div className="skill-progress-fill" style={{ width: "80%" }} />
                                </div>
                            </li>
                            <li className="skills-item">
                                <div className="title-wrapper">
                                    <h5 className="h5">Data Structures: Python and Java </h5>
                                    <data value={90}>85%</data>
                                </div>
                                <div className="skill-progress-bg">
                                    <div className="skill-progress-fill" style={{ width: "85%" }} />
                                </div>
                            </li>
                            <li className="skills-item">
                                <div className="title-wrapper">
                                    <h5 className="h5">Game Development: C# and Blender</h5>
                                    <data value={50}>80%</data>
                                </div>
                                <div className="skill-progress-bg">
                                    <div className="skill-progress-fill" style={{ width: "80%" }} />
                                </div>
                            </li>
                            <li className="skills-item">
                                <div className="title-wrapper">
                                    <h5 className="h5">Version Control: Git, Github, GitLab</h5>
                                    <data value={50}>100%</data>
                                </div>
                                <div className="skill-progress-bg">
                                    <div className="skill-progress-fill" style={{ width: "100%" }} />
                                </div>
                            </li>
                            <li className="skills-item">
                                <div className="title-wrapper">
                                    <h5 className="h5">Project Management: ClickUp, KanBan, Gantt</h5>
                                    <data value={50}>100%</data>
                                </div>
                                <div className="skill-progress-bg">
                                    <div className="skill-progress-fill" style={{ width: "100%" }} />
                                </div>
                            </li>
                        </ul>
                    </section>
                </header>
            </article>

        </>
    )
}