import AboutMe from "./AboutMe.jsx"
import Resume from "./Resume.jsx"
import Portfolio from "./Portfolio.jsx"
import Gallery from "./Gallery.jsx"
import Contact from "./Contact.jsx"
import Skills from "./Skills.jsx"

export default function Displayer( { activePage } ) {
    switch (activePage) {
        case 'about':
            {console.log('About Me')}
            return <AboutMe />
        case 'resume':
            return <Resume />
        case 'portfolio':
            return <Portfolio />
        case 'blog':
            return <Gallery />
        case 'contact':
            return <Contact />
        case 'skill':
            return <Skills />
    }
}