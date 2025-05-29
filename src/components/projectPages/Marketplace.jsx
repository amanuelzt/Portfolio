import Navbar from '../Navbar'
import { Link } from 'react-router-dom'

function Marketplace() {
  return (
    <div>
      <Navbar />
      <div className="project-page">
        <Link to="/" className="back-button">← Back to Home</Link>
        <h1>UW Marketplace (UI/UX Design)</h1>
        <p><strong>Date:</strong> Mar 2025</p>
        <p><strong>Timeline:</strong> 4 weeks</p>
        <p><strong>Team Size:</strong> 4</p>
        <img src="/images/MarketFrontPage.png" alt="Marketplace Home" className="project-image" />
        <p className="image-descrip">Homepage with product listings and filter options</p>

        <section>
          <h2>Overview</h2>
          <p>
            UW Marketplace is a conceptual design for a secure student-to-student exchange platform, enabling users to buy, sell, or trade items safely on campus. Designed in Figma with a human-centered approach, the project emphasizes trust, convenience, and a polished user experience tailored to the UW community.
          </p>
        </section>

        <section>
          <h2>Problem</h2>
          <p>
            Many UW students rely on informal methods like Snapchat stories or OfferUp to buy and sell used items. These methods lack safety, accountability, and university-specific relevance. There was a clear need for a platform that centered student trust and streamlined the process of listing, messaging, and purchasing items.
          </p>
        </section>

        <section>
          <h2>Process</h2>
          <ul>
            <li>
              <strong>User Research:</strong> Conducted surveys and interviews with 15+ students to understand needs around trust, search filters, and campus-related logistics.
            </li>
            <li>
              <strong>Wireframing:</strong> Sketched initial screens on paper, followed by low- and mid-fidelity wireframes in Figma, focusing on clean navigation and minimal cognitive load.
            </li>
            <li>
              <strong>Visual Design:</strong> Developed a high-fidelity prototype that includes homepage, product detail pages, user profiles, and secure messaging flow.
            </li>
            <li>
              <strong>Security Considerations:</strong> Integrated conceptual flows for UW NetID login and optional student ID verification to ensure user authenticity.
            </li>
          </ul>
        </section>

        <section>
          <h2>Solution</h2>
          <p>
            The final prototype delivers a student-friendly marketplace tailored to the UW context. Key features include:
          </p>
          <ul>
            <li>🔐 UW NetID login and optional ID verification for added trust</li>
            <li>📦 Simple listing flow and customizable product categories</li>
            <li>💬 Built-in secure chat feature between buyers and sellers</li>
            <li>👤 User profiles with rating and transaction history</li>
          </ul>
        </section>

        <section>
          <img src="/images/MarketLogin.png" alt="Login Page" className="project-image" />
          <p className="image-descrip">Secure login with UW email verification incorporated</p>
          <img src="/images/MarketVerify.png" alt="Verification Page" className="project-image" />
          <p className="image-descrip">Additional verification using other form of identification to ensure safety</p>
        </section>
      </div>
    </div>
  )
}

export default Marketplace