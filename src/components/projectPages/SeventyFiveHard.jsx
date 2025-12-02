import { Link } from 'react-router-dom'

function SeventyFiveHard() {
  return (
    <article className="project-page">
      <Link to="/" className="back-button">← Back to Home</Link>

      <header className="project-header">
        <h1>75 Hard Challenge Website (Full-Stack Web Development)</h1>
        <p>
          <strong>Date:</strong> Mar 2025 &nbsp; | &nbsp;
          <strong>Timeline:</strong> 8 weeks &nbsp; | &nbsp;
          <strong>Team Size:</strong> 4
        </p>
      </header>

      <figure>
        <img src="/images/75Hard/75FrontPage.png" alt="Homepage of 75 Hard App" className="project-image" />
        <figcaption className="image-descrip">Homepage of the 75 Hard Challenge web app</figcaption>
      </figure>

      {/* ---------------------- OVERVIEW ---------------------- */}
      <section>
        <h2>Overview</h2>
        <p>
          The 75 Hard Challenge Website is a full-stack wellness website designed to help users complete
          the "75 Hard Challenge", a mental and physical program requiring completion of daily tasks over
          75 consecutive days. The app allows users to track progress, stay accountable, and visualize their completion
          of daily habits through an intuitive and motivational interface. it is built with React on the frontend and
          Firebase on the backend, supporting long-term habit building.
        </p>
      </section>

      {/* ---------------------- RESEARCH ---------------------- */}
      <section>
        <h2>Research</h2>
        <p>
          Students and young professionals often struggle with consistency in wellness routines. Existing solutions,
          like paper checklists or generic habit-tracking apps, lack structure, engagement, and accountability. 
          To better understand user needs, we conducted informal interviews and surveys focusing on:
        </p>
        <ul>
          <li>Current methods of habit tracking and their pain points</li>
          <li>Motivational factors that encourage them to stick to their routine</li>
        </ul>
        <p>
          This research highlighted the need for a motivating, structured system that balances accountability with flexibility while ensuring it is easy to use.
        </p>
      </section>

      {/* ---------------------- IDEATION ---------------------- */}
      <section>
        <h2>Ideation</h2>
        <p>
          Based on our research, we brainstormed and prototyped features that would support habit consistency and engagement:
        </p>
        <ul>
          <li>Modular React component ideas for checklists, calendars, and dashboards to allow scalable and reusable design</li>
          <li>Elements like streaks and progress bars to increase motivation</li>
          <li>Daily logs of custom set activities completed and capability to review previous logs</li>
        </ul>
      </section>

      {/* ---------------------- DESIGN ---------------------- */}
      <section>
        <h2>Design</h2>
        <p>
          The final design balances usability, engagement, and technical reliability. Key features include:
        </p>
        <ul>
          <li>Visual calendar highlighting completed days and encouraging streak continuation</li>
          <li>Interactive daily checklist for tasks such as workouts, hydration, and reading</li>
          <li>Secure login and persistent user state via Firebase authentication</li>
          <li>Real-time cloud syncing for consistent progress on an account across devices</li>
        </ul>

        <figure>
          <img src="/images/75Hard/75SignUp.png" alt="Sign up page" className="project-image" />
          <figcaption className="image-descrip">Sign up page with customizable challenge start date</figcaption>
        </figure>
        <figure>
          <img src="/images/75Hard/75CustomChallenge.png" alt="Custom challenge settings" className="project-image" />
          <figcaption className="image-descrip">Custom challenge settings</figcaption>
        </figure>
        <figure>
          <img src="/images/75Hard/75CalLog.png" alt="Calendar with previous completed days highlighted" className="project-image" />
          <figcaption className="image-descrip">Users can review previous days’ checklists to track progress</figcaption>
        </figure>
        <figure>
          <img src="/images/75Hard/75Checklist.png" alt="Daily checklist page" className="project-image" />
          <figcaption className="image-descrip">Interactive daily checklist interface</figcaption>
        </figure>
      </section>

      {/* ---------------------- REFLECTION ---------------------- */}
      <section>
        <h2>Reflection</h2>
        <p>
          This project reinforced the importance of combining UX design with technical implementation. 
          By creating clear visual feedback, structured progress tracking, and secure data management, 
          the app helps users focus on habit formation without friction. Key lessons include:
        </p>
        <ul>
          <li>The value of modular, reusable components for front-end development</li>
          <li>Real-time feedback as a motivational tool to sustain engagement</li>
          <li>Balancing technical complexity with user experience for intuitive interaction</li>
        </ul>
        <p>
          Future iterations could include mobile responsiveness, adaptive notifications, and gamified challenges 
          to further enhance user motivation and engagement.
        </p>
      </section>
      {/* LINK TO LIVE WEBSITE */}
      <section className="live-link-section">
        <a 
          href="https://info-340-603a7.web.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="live-website-button"
        >
          Visit the Live Website
        </a>
      </section>
    </article>
  )
}

export default SeventyFiveHard