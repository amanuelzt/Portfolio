import { Link } from 'react-router-dom';

function RecyclingApp() {
  return (
    <article className="project-page">
      <Link to="/" className="back-button">← Back to Home</Link>

      <header className="project-header">
        <h1>UW Recycling Education App (Mobile UI/UX)</h1>
        <p>
          <strong>Date:</strong> Mar 2024 &nbsp; | &nbsp;
          <strong>Timeline:</strong> 5 weeks &nbsp; | &nbsp;
          <strong>Team Size:</strong> 5
        </p>
      </header>

      <figure>
        <img
          src="/images/RecyclingCoverPic.png"
          alt="Recycling App Home"
          className="project-image mobile-image"
        />
        <figcaption className="image-descrip">
          Homepage of the mobile app showing search and learning tabs
        </figcaption>
      </figure>

      {/* ---------------------- OVERVIEW ---------------------- */}
      <section>
        <h2>Overview</h2>
        <p>
          The UW Recycling App is a mobile-first educational tool designed to reduce recycling contamination on campus. Contamination occurs when non-recyclable or improperly prepared items enter recycling bins, creating excess waste, increasing processing costs, and creating hazards for sorting staff. The app provides students with clear guidance, educational content, and interactive learning to properly build correct recycling habits.
        </p>
        <p>Some key features of the app:</p>
        <ul>
          <li>Quick access to item specific recycling instructions</li>
          <li>Interactive content explaining recycling rules and consequences of contamination</li>
          <li>Mobile-first design supporting easy decision making</li>
          <li>Mini-games to reinforce correct recycling behaviors</li>
        </ul>
      </section>

      {/* ---------------------- RESEARCH ---------------------- */}
      <section>
        <h2>Research</h2>
        <p>
          To understand recycling contamination at UW, we conducted secondary research, surveys, and interviews with students and staff. We explored causes, impacts, and stakeholder perspectives to inform design decisions.
        </p>

        <h3>Key Findings</h3>
        <ul>
          <li>25% of single-stream recyclables are contaminated, leading to entire loads being landfilled.</li>
          <li>Only 75% of campus recycling is correctly sorted; contamination increases labor and costs.</li>
          <li>Common causes include confusing signs, “wishful recycling”, and lack of awareness.</li>
        </ul>

        <h3>Existing Solutions</h3>
        <ul>
          <li><strong>Unique Container Lids:</strong> Restricts disposal options as its ineffective for irregular/wrong items.</li>
          <li><strong>Waste 101:</strong> Online course on recycling basics where participation is voluntary.</li>
          <li><strong>Door Hangers:</strong> Educates students during move-in but may be ignored.</li>
        </ul>

        <h3>Stakeholders</h3>
        <ul>
          <li><strong>Students:</strong> Directly influence contamination rates.</li>
          <li><strong>UW Recycling:</strong> Manages collection, education, and partnerships.</li>
          <li><strong>Waste Management Companies:</strong> Sort recycling; contamination increases workload and cost.</li>
        </ul>

        <h3>User Personas</h3>
        <ul>
          <li><strong>Engaged but Uninformed:</strong> Wants to recycle but lacks clear knowledge of proper practices.</li>
          <figure>
            <img
              src="/images/Recycling/RecyclingPersona1.png"
              alt="First user persona"
              className="project-image"
            />
            <figcaption className="image-descrip">1st user persona</figcaption>
          </figure>
          <li><strong>Convenience-Oriented:</strong> Prioritizes speed; may discard items incorrectly if bins are full or signage is unclear.</li>
          <figure>
            <img
              src="/images/Recycling/RecyclingPersona2.png"
              alt="Second user persona"
              className="project-image"
            />
            <figcaption className="image-descrip">2nd user persona</figcaption>
          </figure>
        </ul>

        <h3>Key Takeaways</h3>
        <ul>
          <li>Students require clear, actionable guidance to reduce contamination.</li>
          <li>Existing solutions do not sufficiently combine convenience, awareness, and engagement.</li>
          <li>Interactive, mobile-accessible tools can effectively improve recycling behaviors.</li>
        </ul>
      </section>

      {/* ---------------------- IDEATION ---------------------- */}
      <section>
        <h2>Ideation</h2>
        <h3>Solutions Considered</h3>
        <ul>
          <li><strong>Orientation Presentation:</strong> Informational slides for students; engagement risk is high.</li>
          <li><strong>Gamified Recycling Bins:</strong> Points and feedback encourage proper disposal through play.</li>
          <li><strong>Giant Signage:</strong> Large durable signs in waste rooms; addresses only part of the problem.</li>
          <li><strong>Online Recycling Guide:</strong> QR-coded guide with search and feedback; limited by voluntary access.</li>
        </ul>

        <h3>Selected Solution</h3>
        <p>
          We implemented an <strong>Interactive Educational Presentation</strong> through a mobile app. It teaches students proper recycling practices, explains contamination effects, and reinforces learning via quizzes and mini-games. This solution addresses the root cause of a knowledge gap while ensuring the content stays engaging and accessible on-the-go.
        </p>

        <h3>Product Features</h3>
        <ul>
          <li><strong>Primary:</strong> Recycling education and contamination awareness.</li>
          <li><strong>Secondary:</strong> Pictures, quizzes, and UW-specific examples to make learning relatable.</li>
        </ul>

        <p>
          Initial low-fidelity wireframes followed a presentation style slide flow to share recycling information and tools. While it was useful to provide general knowledge, this format limited interactivity and repeatability. The team decided to evolve the high-fidelity wireframes into a mobile app enable free navigation, instant item search, and repeated quiz engagement, improving usability and learning outcomes.
        </p>

        <div className="image-row">
          <figure>
            <img
              src="/images/Recycling/RecyclingLowFidelWireframes.png"
              alt="Early low-fidelity wireframes"
              className="project-image"
            />
            <figcaption className="image-descrip">Initial wireframes outlining presentation-style slides</figcaption>
          </figure>

          <figure>
            <img
              src="/images/Recycling/RecyclingFinalLowFidelWireframes.png"
              alt="Final low-fidelity wireframes"
              className="project-image"
            />
            <figcaption className="image-descrip">Final low-fidelity wireframes adapted to a mobile app structure for interactivity</figcaption>
          </figure>
        </div>
      </section>

      {/* ---------------------- DESIGN ---------------------- */}
      <section>
        <h2>Design</h2>
        <p>
          The final high-fidelity design focuses on usability, accessibility, and engagement. We carefully considered visual hierarchy, typography, and color to improve comprehension and make recycling guidance immediately clear.
        </p>

        <h3>Typography and Color</h3>
        <p>
          Typography was chosen for readability across all screens, emphasizing clarity for headings, instructions, and buttons. Colors were selected based on classic recycling conventions of green, white, and black to reinforce meaning and maintain visual consistency.
        </p>
        <div className="image-row">
          <figure>
            <img
              src="/images/Recycling/RecyclingText.png"
              alt="Recycling typography"
              className="project-image half-image"
            />
            <figcaption className="image-descrip">Typography applied in the final prototype</figcaption>
          </figure>
          <figure>
            <img
              src="/images/Recycling/RecyclingColors.png"
              alt="Recycling color scheme"
              className="project-image half-image"
            />
            <figcaption className="image-descrip">Green, white, and black color scheme reinforcing recycling conventions</figcaption>
          </figure>
        </div>

        <h3>High-Fidelity Screens</h3>
        <p>
          The app structure allows users to log in quickly, search for items with instant results, and access learning content in a clear, interactive layout. The following screens highlight key functionality of the app including the game feature.
        </p>

        <div className="image-row">
          <figure>
            <img
              src="/images/RecyclingLogin.png"
              alt="Recycling Login Page"
              className="project-image mobile-image"
            />
            <figcaption className="image-descrip">Login page with intuitive input fields</figcaption>
          </figure>

          <figure>
            <img
              src="/images/RecyclingSearch.png"
              alt="Search Feature"
              className="project-image mobile-image"
            />
            <figcaption className="image-descrip">Search interface with instant results for common items</figcaption>
          </figure>

          <figure>
            <img
              src="/images/RecyclingLearn.png"
              alt="Learn Tab"
              className="project-image mobile-image"
            />
            <figcaption className="image-descrip">Learn tab presenting educational content and interactive quizzes</figcaption>
          </figure>
        </div>
        <div className="image-row">
          <figure>
            <img
              src="/images/Recycling/GameHome.png"
              alt="Game Home Page"
              className="project-image mobile-image"
            />
            <figcaption className="image-descrip">Game home page</figcaption>
          </figure>

          <figure>
            <img
              src="/images/Recycling/EasyGame.png"
              alt="Game screen where user got the answer right"
              className="project-image mobile-image"
            />
            <figcaption className="image-descrip">User correctly answering a question</figcaption>
          </figure>

          <figure>
            <img
              src="/images/Recycling/HardGame.png"
              alt="Game screen where user got the answer wrong"
              className="project-image mobile-image"
            />
            <figcaption className="image-descrip">User answering incorrectly</figcaption>
          </figure>
        </div>
      </section>

      {/* ---------------------- REFLECTION ---------------------- */}
      <section>
        <h2>Reflection</h2>
        <p>
          This project highlighted the importance of designing clear, interactive, and mobile-first educational tools. By making the switch from a presentation style prototype to a fully interactive app, we created an experience that supports proper learning. It provides access to accurate recycling guidance, reducing contamination and promoting sustainable habits on campus.
        </p>
        <p>
          Key lessons include the value of iterative design, user research, and integrating games to reinforce learning. Future improvements could include location specific bin guidance, adaptive quizzes, expanded content for more proper sustainability practices, and continuous usability testing.
        </p>
      </section>
    </article>
  );
}

export default RecyclingApp;