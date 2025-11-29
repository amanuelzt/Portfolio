import { Link } from 'react-router-dom'

function SeventyFiveHard() {
  return (
    <div className="project-page">
      <Link to="/" className="back-button">← Back to Home</Link>
      <h1>75 Hard Challenge Website</h1>
      <p><strong>Date:</strong> Mar 2025</p>
      <p><strong>Timeline:</strong> 8 weeks </p>
      <p><strong>Team Size:</strong> 4 </p>
      <img src="/images/75FrontPage.png" alt="Homepage of 75 Hard App" className="project-image" />
      <p className="image-descrip">Homepage of the website</p>

      <section>
        <h2>Overview</h2>
        <p>
          This full-stack wellness web application was built in a collaborative, team-based setting
          to support users completing the "75 Hard Challenge" — a mental toughness program involving
          daily physical and mental tasks over 75 consecutive days. Built with React on the frontend
          and Firebase on the backend, the app allows users to track their progress, stay accountable,
          and visualize completion of daily habits through an intuitive interface.
        </p>
      </section>

      <section>
        <h2>Problem</h2>
        <p>
          Students and young professionals often struggle to maintain consistency with wellness routines,
          especially in busy academic or work environments. Traditional tracking methods like paper
          checklists or notes apps lack structure, motivation, and long-term accountability. Our challenge
          was to create a digital experience that not only tracked the 75-day challenge but also kept users
          engaged, visually motivated, and supported through a structured user experience.
        </p>
      </section>

      <section>
        <h2>Process</h2>
        <p>We followed an iterative, user-centered design and development process:</p>
        <ul>
          <li>
            <strong>Planning & Research:</strong> Conducted informal interviews to understand users’ needs and 
            frustration points with habit tracking.
          </li>
          <li>
            <strong>Wireframing on paper:</strong> Designed low- and mid-fidelity wireframes focusing on usability,
            clarity, and motivational visual cues like streaks and progress bars.
          </li>
          <li>
            <strong>Component Development:</strong> Built modular React components (Checklist, Calendar, User Dashboard)
            for flexibility and reusability. Implemented state management for daily progress.
          </li>
          <li>
            <strong>Firebase Integration:</strong> Used Firebase Auth for login/signup and Firestore for real-time
            data storage. Ensured data synced across devices.
          </li>
          <li>
            <strong>Team Collaboration:</strong> Worked in a GitHub repo with branching, code reviews, and pull requests
            to maintain clean code and consistent UI patterns.
          </li>
        </ul>
      </section>

      <section>
        <h2>Solution</h2>
        <p>
          The final product is a clean, responsive web app that helps users build discipline through habit
          reinforcement. Key features include:
        </p>
        <ul>
          <li>📅 A visual calendar that highlights completed days and encourages streak continuation</li>
          <li>✅ Daily checklist interface for marking task completion (e.g., workout, water intake, reading)</li>
          <li>🔐 Secure login and persistent user state via Firebase authentication</li>
          <li>📊 Real-time data updates and cloud sync so users never lose their progress</li>
        </ul>
        <p>
          The app successfully blends UX design and front-end engineering to support a long-term behavioral goal.
          It stands as an example of using technology to help users build resilience, organization, and accountability.
        </p>
        <img src="/images/75CalLog.png" alt="Previous log data from calendar" className="project-image" />
        <p className="image-descrip">Users can click on previous completed days to see the checklist data from then</p>
        <img src="/images/75Checklist.png" alt="Checklist Page with daily tasks" className="project-image" />
        <p className="image-descrip">Customizable daily checklist user fills out</p>
        <img src="/images/75SignUp.png" alt="Sign up page" className="project-image" />
        <p className="image-descrip">Sign up page with customizable challenge start date</p>
      </section>
    </div>
  )
}

export default SeventyFiveHard