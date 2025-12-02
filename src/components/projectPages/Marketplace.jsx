import { Link } from 'react-router-dom'

function Marketplace() {
  return (
    <article className="project-page">
      <Link to="/" className="back-button">← Back to Home</Link>

      <header className="project-header">
        <h1>UW Marketplace (UI/UX Design)</h1>
        <p>
          <strong>Date:</strong> Mar 2025 &nbsp; | &nbsp;
          <strong>Timeline:</strong> 4 weeks &nbsp; | &nbsp;
          <strong>Team Size:</strong> 4
        </p>
      </header>

      <figure>
        <img src="/images/MarketFrontPage.png" alt="Marketplace homepage" className="project-image" />
        <figcaption className="image-descrip">Homepage with product cards and quick filters</figcaption>
      </figure>

      <section>
        <h2>Overview</h2>
        <p>
          UW Marketplace is a student-focused platform to safely buy, sell, and trade items on campus. 
          Existing channels like social media groups or general marketplaces can be:
        </p>
        <ul>
          <li>Disorganized and difficult to navigate</li>
          <li>Insecure and lacking verification</li>
          <li>Not tailored to the UW community</li>
        </ul>
        <p>
          Our platform addresses these issues with:
        </p>
        <ul>
          <li>Verified student accounts for trusted transactions</li>
          <li>Intuitive search filters and clear categories</li>
          <li>Direct messaging to streamline communication</li>
        </ul>
        <p>
          By focusing on trust, safety, and accessibility, UW Marketplace creates a reliable ecosystem for buying and selling textbooks, electronics, furniture, and other student essentials.
        </p>
      </section>

      <section>
        <h2>Research</h2>
        <p>
          We conducted a literature review, competitive analysis, and user research to understand pain points around trust, safety, and usability in existing marketplaces.
        </p>

        <h3>Key Insights from Literature</h3>
        <ul>
          <li>
            <strong>Hamari et al. (2016):</strong> Emphasizes trust, community engagement, and reputation systems in collaborative consumption.
          </li>
          <li>
            <strong>Shahab (2023):</strong> Highlights the importance of verification and privacy measures to build user confidence.
          </li>
          <li>
            <strong>Mokhberi (2023):</strong> Focuses on safety management and communication protocols for peer-to-peer platforms.
          </li>
        </ul>

        <h3>Competitive Analysis</h3>
        <ul>
          <li>
            <strong>Facebook Marketplace:</strong> Wide reach, but lacks student-specific verification and is prone to spam.
            <figure>
              <img src="/images/Market/FacebookMarket.png" alt="Facebook Marketplace homepage" className="project-image" />
            </figure>
          </li>
          <li>
            <strong>Craigslist:</strong> Local listings and free, but minimal verification and cluttered UI.
            <figure>
              <img src="/images/Market/Craigslist.png" alt="Craigslist homepage" className="project-image" />
            </figure>
          </li>
          <li>
            <strong>OfferUp:</strong> Mobile-friendly, but variable content quality and ads reduce reliability.
            <figure>
              <img src="/images/Market/OfferUp.png" alt="OfferUp homepage" className="project-image" />
            </figure>
          </li>
        </ul>

        <h3>Personas</h3>
        <ul>
          <li>
            <strong>Alex Han:</strong> Needs to sell textbooks safely. Wants verified buyers and in-app messaging.
          </li>
          <li>
            <strong>Jessica Jones:</strong> Seeks second-hand furniture. Wants advanced filters and secure payments.
          </li>
        </ul>

        <h3>Takeaways</h3>
        <p>
          Students value safety, trust, and efficiency over generic features. Verified, campus-specific platforms with clear messaging and search filters are preferred. These findings shaped our design choices for these core features:
        </p>
        <ul>
            <li>UW NetID login</li>
            <li>Category taxonomy</li>
            <li>Messaging</li>
            <li>Rating systems</li>
          </ul>
      </section>

      <section>
        <h2>Ideation</h2>
        <p>
          Brainstorming focused on a UW-exclusive marketplace addressing safety, trust, and usability. The chosen concept integrates with MyUW, leveraging a familiar and secure login system.
        </p>

        <div className="image-row">
          <figure>
            <img src="/images/Market/MarketEarlySketch1.png" alt="Marketplace early sketch" className="project-image mobile-image" />
            <figcaption className="image-descrip">Early sketches exploring layout, filters, and core features</figcaption>
          </figure>
          <figure>
            <img src="/images/Market/MarketEarlySketch2.png" alt="Marketplace early sketch" className="project-image mobile-image" />
            <figcaption className="image-descrip">Continuation of brainstorming</figcaption>
          </figure>
        </div>

        <h3>Best Idea</h3>
        <p>
          Integrating with MyUW ensures only verified students can access the platform. This reduces scams, promotes trust, and creates a campus-centric ecosystem for community engagement and reputation building.
        </p>
        <p>
          Features include: secure messaging, selective trading, safe meetup suggestions, and potential expansions like student discounts and rewards via “Husky Points.”
        </p>

        <h3>Prototype & Features</h3>
        <ul>
          <li><strong>Student Verification:</strong> MyUW NetID login ensures all users are verified.</li>
          <li><strong>Search & Filtering:</strong> Filters by price, condition, category, and date listed.</li>
          <li><strong>Today’s Picks:</strong> Curated homepage section for popular items.</li>
          <li><strong>Messaging & Ratings:</strong> In-app communication and buyer/seller ratings.</li>
        </ul>
        <figure>
          <img
            src="/images/Market/MarketProfile.png"
            alt="Marketplace Profile Page"
            className="project-image"
          />
          <figcaption className="image-descrip">
            User profile showing ratings and verification status
          </figcaption>
        </figure>
      </section>

      <section>
        <h2>Design</h2>

        <p>
          Our design phase focused on evaluating our prototype through an empirical
          experiment and iterating based on user feedback. We ran a between-subjects
          study comparing our UW Marketplace prototype to informal student methods
          (Snapchat, Discord). Insights from this evaluation directly shaped
          our next round of design improvements.
        </p>
        <div className="side-by-side">
          <figure>
            <img
              src="/images/Market/MarketUserTable.png"
              alt="Marketplace user testing table"
              className="half-image"
            />
            <figcaption className="image-descrip">
              Summary table of key experimental metrics
            </figcaption>
          </figure>

          <figure>
            <img
              src="/images/Market/MarketUserGraph.png"
              alt="Marketplace user testing graph"
              className="half-image"
            />
            <figcaption className="image-descrip">
              Visual comparison of control vs. experimental groups
            </figcaption>
          </figure>
        </div>

        <h3>What We Tested</h3>
        <ul>
          <li>Time required to find a seller</li>
          <li>Perceived security and trust</li>
          <li>Communication efficiency</li>
          <li>Overall satisfaction</li>
        </ul>

        <p>
          The results showed large improvements with our prototype, especially in security
          and efficiency. These outcomes guided our iterative design updates.
        </p>

        <h3>Key Design Iterations</h3>

        <h4>1. Communication feature (Improved Social Features)</h4>
        <p>
          Participants in the control group appreciated the communication efficiency of
          Snapchat/Discord. To match this, we introduced a built-in messaging inbox. This feature supports smoother negotiation and
          reduces the need to switch platforms.
        </p>

        <figure>
          <img
            src="/images/Market/MarketMessages.png"
            alt="Marketplace Messaging Page"
            className="project-image"
          />
          <figcaption className="image-descrip">
            Updated messaging flow for direct student-to-student communication
          </figcaption>
        </figure>

        <h4>2. Optional ID Verification (Enhanced Safety)</h4>
        <p>
          Because perceived security doubled in the experimental group, we expanded on our
          trust-building features. Users can now complete an optional ID verification
          process using a UW ID or driver’s license. Verified users would receive a badge on
          their profile, reinforcing transparency and reducing transaction anxiety.
        </p>

        <figure>
          <img
            src="/images/MarketVerify.png"
            alt="Marketplace verification page"
            className="project-image"
          />
          <figcaption className="image-descrip">
            Login flow supporting UW email authentication and optional verification
          </figcaption>
        </figure>

        <h3>Outcome</h3>
        <p>
          The experiment directly informed the next iteration of our prototype.
          Improvements in messaging and verification all address the
          usability gaps highlighted by participants, resulting in a safer, faster, and
          more student-friendly marketplace experience.
        </p>
      </section>

      <section>
        <h2>Reflection</h2>
        <p>
          This project helped us understand how trust, safety, and usability shape a student-focused marketplace. Our research and usability testing showed that verification, clear communication, and intuitive navigation significantly reduce uncertainty and make transactions feel more reliable.
        </p>
        <p>
          Iterating on our prototype, especially with messaging and verification, improved clarity and user confidence. Moving forward, we would continue refining trust indicators, test alternative UI patterns, and gather more student feedback to strengthen the platform’s overall experience.
        </p>
      </section>
    </article>
  )
}

export default Marketplace