import Navbar from '../Navbar'
import { Link } from 'react-router-dom'

function RecyclingApp() {
  return (
    <div>
      <Navbar />
      <div className="project-page">
        <Link to="/" className="back-button">← Back to Home</Link>
        <h1>UW Recycling Education App</h1>
        <p><strong>Date:</strong> Mar 2024</p>
        <p><strong>Timeline:</strong> 5 weeks</p>
        <p><strong>Team Size:</strong> 4</p>
        <img src="/images/RecyclingCoverPic.png" alt="Recycling App Home" className="project-image mobile-image" />
        <p className="image-descrip">Homepage of the mobile app</p>

        <section>
          <h2>Overview</h2>
          <p>
            This mobile-first educational app was designed to help University of Washington students improve
            their recycling habits by making correct disposal information quick and accessible. The design
            focuses on reducing contamination in campus bins through an intuitive search interface and
            clear visual guidance. The project emphasized mobile usability, accessibility, and behavioral nudges.
          </p>
        </section>

        <section>
          <h2>Problem</h2>
          <p>
            UW students frequently dispose of items incorrectly due to inconsistent signage, complex sorting
            rules, and lack of confidence in recycling decisions. This results in high rates of contamination
            in recycling streams and confusion across campus. Our challenge was to create a mobile experience
            that empowers students to recycle correctly with minimal effort.
          </p>
        </section>

        <section>
          <h2>Process</h2>
          <p>We followed a user-centered design process with iterative feedback cycles:</p>
          <ul>
            <li>
              <strong>User Research:</strong> Conducted surveys and interviews to understand confusion points,
              habits, and existing knowledge gaps around recycling.
            </li>
            <li>
              <strong>Competitive Analysis:</strong> Reviewed apps like Recycle Coach and local municipal tools
              to identify usability issues and feature gaps.
            </li>
            <li>
              <strong>Wireframing & Prototyping:</strong> Sketched early wireframes, then built low- and high-fidelity
              prototypes in Figma to test interactions, especially the search flow and item results.
            </li>
            <li>
              <strong>Usability Testing:</strong> Ran scenario-based tests with students to evaluate clarity of
              navigation, search accuracy, and learnability. Incorporated feedback on item naming and layout.
            </li>
            <li>
              <strong>Design Iteration:</strong> Refined typography, color use, iconography, and content labels
              to increase clarity and reduce cognitive load in high-stress disposal scenarios.
            </li>
          </ul>
        </section>

        <section>
          <h2>Solution</h2>
          <p>
            The final design is a clean, mobile-first interface that helps users:
          </p>
          <ul>
            <li>🔍 Search for any item and receive location-specific disposal instructions</li>
            <li>📘 Learn about categories like Compost, Landfill, and Recycle through a browsable guide</li>
            <li>📸 Identify common campus-specific items with iconography and visual cues</li>
            <li>🧠 Build recycling knowledge with short tips and reminders embedded in the flow</li>
          </ul>
          <p>
            The app improves both individual knowledge and campus sustainability efforts by reducing
            recycling errors and empowering students to make the right call at the right time.
          </p>
        </section>
        <section>
        <div className="image-row">
            <div className="image-column">
                <img src="/images/RecyclingLogin.png" alt="Recycling Login Page" className="project-image mobile-image" />
                <p className="image-descrip">Custom user login page</p>
            </div>
            <div className="image-column">
                <img src="/images/RecyclingSearch.png" alt="Search Feature" className="project-image mobile-image" />
                <p className="image-descrip">Search interface for disposal instructions</p>
            </div>
            <div className="image-column">
                <img src="/images/RecyclingLearn.png" alt="Recycling Learn Tab" className="project-image mobile-image" />
                <p className="image-descrip">Learn tab with educational articles</p>
            </div>

        </div>
        </section>
      </div>
    </div>
  )
}

export default RecyclingApp