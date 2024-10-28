export default function Sidebar() {
    return (
        <>
            <aside className="sidebar" data-sidebar="">
          <div className="sidebar-info">
            <figure className="avatar-box">
              <img src="./assets/images/my-avatar.png" alt="Om Kharche" width={80} />
            </figure>
            <div className="info-content">
              <h1 className="name" title="Om Kharche">
                Michael Archivist
              </h1>
              <p className="title">IT Professional</p>
            </div>
            <button className="info_more-btn" data-sidebar-btn="">
              <span>Show Contacts</span>
              <ion-icon name="chevron-down" />
            </button>
          </div>
          <div className="sidebar-info_more">
            <div className="separator" />
            <ul className="contacts-list">
              <li className="contact-item">
                <div className="icon-box">
                  <ion-icon name="mail-outline" />
                </div>
                <div className="contact-info">
                  <p className="contact-title">Email</p>
                  <a href="miguelmanabo4@gmail.com" className="contact-link">
                    miguelmanabo4@gmail.com
                  </a>
                </div>
              </li>
              <li className="contact-item">
                <div className="icon-box">
                  <ion-icon name="phone-portrait-outline" />
                </div>
                <div className="contact-info">
                  <p className="contact-title">Phone</p>
                  <a href="tel:+12133522795" className="contact-link">
                    +63 999 8888 777
                  </a>
                </div>
              </li>
              <li className="contact-item">
                <div className="icon-box">
                  <ion-icon name="calendar-outline" />
                </div>
                <div className="contact-info">
                  <p className="contact-title">Birthday</p>
                  <time dateTime="1982-06-23">14 February, 2003</time>
                </div>
              </li>
              <li className="contact-item">
                <div className="icon-box">
                  <ion-icon name="location-outline" />
                </div>
                <div className="contact-info">
                  <p className="contact-title">Location</p>
                  <address>Cavite, Philippines</address>
                </div>
              </li>
            </ul>
            <div className="separator" />
            <ul className="social-list">
              <li className="social-item">
                <a href="https://m.me/Archivist.Michael" className="social-link">
                  <ion-icon name="logo-facebook" />
                </a>
              </li>
              <li className="social-item">
                <a href="https://www.instagram.com/archivistttt/" className="social-link">
                  <ion-icon name="logo-instagram" />
                </a>
              </li>
              <li className="social-item">
                <a href="https://github.com/Fourthhy" className="social-link">
                  <ion-icon name="logo-github" />
                </a>
              </li>
            </ul>
          </div>
        </aside>
        </>
    )
}