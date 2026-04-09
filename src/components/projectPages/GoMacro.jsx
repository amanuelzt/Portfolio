import { Link } from 'react-router-dom'

function GoMacro() {
  return (
    <article className="project-page">
      <Link to="/" className="back-button">← Back to Home</Link>

      <header className="project-header">
        <h1>GoMacro (UX/UI Design)</h1>
        <p>
          <strong>Date:</strong> In Progress &nbsp; | &nbsp;
          <strong>Timeline:</strong> 2 quarters &nbsp; | &nbsp;
          <strong>Team Size:</strong> 5
        </p>
      </header>

      <section>
        <h2>Overview</h2>
        <p>
          GoMacro is a nutrition companion app built for young adults aged 18–25.
          The project tackles a gap that we kept seeing, although Gen Z is health-conscious, they are also burned out and
          existing apps demand too much effort and often make users feel worse, not better.
        </p>
        <p>
          Our approach centers on three main ideas: energy-aware recommendations, a single-card
          decision flow to reduce choice overload, and positive reinforcement over basic calorie
          counting. This project is currently in progress through spring quarter.
        </p>
      </section>

      <section>
        <h2>The Problem</h2>
        <p>
          Through competitive analysis and primary research with college students, we identified
          three core pain points that existing apps fail to address:
        </p>
        <ul>
          <li><strong>Decision Fatigue:</strong> Academic stress leads students to default to fast food rather than healthy choices</li>
          <li><strong>Manual Tracking Burnout:</strong> Traditional health apps require high-effort input, with users dropping off within two weeks on average</li>
          <li><strong>Nutrition Misinformation:</strong> 97.2% of nutrition content on social media is factually inaccurate</li>
        </ul>
      </section>

      <section>
        <h2>Process</h2>
        <p>
          We grounded our design in a clear research question: how might young adults better
          translate their nutrition intentions into consistent behavior during this critical
          life transition? From there, the team conducted usability testing on an early prototype
          with college students and industry professionals, which directly shaped our core
          feature set.
        </p>
        <p>
          A key pivot came from testing, we removed calorie tracking entirely after participants
          reported it increased anxiety. We replaced it with the Habit Flame system, a streak
          tracker built around consistency over perfection where skipping a day doesn't reset
          your progress.
        </p>
        <p>
          As the team's UX/UI Designer, I was responsible for translating research insights into
          wireframes, defining the visual language, and producing high-fidelity screens for our
          MVP. Working closely with frontend and backend engineers pushed me to communicate
          design decisions in terms of implementation, not just aesthetics.
        </p>
      </section>

      <section>
        <h2>Where We Are</h2>
        <p>
            Winter quarter wrapped up with a demo MVP, a clickable prototype demonstrating
            the core features and basic navigation flow, giving us a tangible way to show
            how the app would look and feel. In spring quarter, our work will be focused on building
            toward a real iOS release, completing basic features like the habit flame streak, energy levels, and macro tracker,
            integrating OpenAI Vision API for real-time fridge scanning, and Google Maps for nearby restaurant discovery.
        </p>
      </section>

      <section>
        <h2>Early Takeaways</h2>
        <p>
          This project has reinforced how much UX design intersects with behavioral psychology.
          Designing for cognitive load, where every decision had to justify itself against
          reducing friction, not just looking polished, has been the most valuable constraint
          I've worked within so far. More reflections to come as the project wraps up.
        </p>
      </section>

    </article>
  )
}

export default GoMacro