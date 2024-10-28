export default function Contact() {
    return (
        <>
            <article className="contact active" data-page="contact">
                <header>
                    <h2 className="h2 article-title">Contact</h2>
                </header>
                <section className="mapbox" data-mapbox="">
                    <figure>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15456.865174521216!2d120.85690804433274!3d14.41469140335005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1730150978982!5m2!1sen!2sph"
                            width={400}
                            height={300}
                            loading="lazy"
                        />
                        
                    </figure>
                </section>
                <section className="contact-form">
                    <h3 className="h3 form-title">Contact Form</h3>
                    <form action="#" className="form" data-form="">
                        <div className="input-wrapper">
                            <input
                                type="text"
                                name="fullname"
                                className="form-input"
                                placeholder="Full name"
                                required=""
                                data-form-input=""
                            />
                            <input
                                type="email"
                                name="email"
                                className="form-input"
                                placeholder="Email address"
                                required=""
                                data-form-input=""
                            />
                        </div>
                        <textarea
                            name="message"
                            className="form-input"
                            placeholder="Your Message"
                            required=""
                            data-form-input=""
                            defaultValue={""}
                        />
                        <button
                            className="form-btn"
                            type="submit"
                            disabled=""
                            data-form-btn=""
                        >
                            <ion-icon name="paper-plane" />
                            <span>Send Message</span>
                        </button>
                    </form>
                </section>
            </article>
        </>
    )
}