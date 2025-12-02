import React from 'react';

function About() {
  return (
    <div className="about-page fade-in">
      {/* Banner Section */}
      <section className="about-banner">
        <div className="about-text">
          <h1>About Me</h1>
            <blockquote className="about-quote">
                "Inclusive design is not an option; it’s a standard."
            </blockquote>
          <h2>My Skills:</h2>
          <ul className="skills-list">
            <li>UI/UX Design</li>
            <li>Information Architecture</li>
            <li>Prototyping & Wireframing</li>
            <li>User Research</li>
            <li>Figma</li>
            <li>Web Development</li>
          </ul>
        </div>
        <div className="about-image">
          <img
            src="/images/About/AboutPicture.png"
            alt="Amanuel Tedla"
            className="about-photo"
          />
        </div>
      </section>

      {/* Rest of the About Content */}
      <section className="about-content">
        <h2>My Story</h2>
        <p>
            I was born in <strong>Ethiopia</strong> and raised in <strong>Botswana</strong> before moving to the <strong>United States</strong> at the start of middle school. Growing up, I was always drawn to <strong>art, design, and technology</strong>, but it wasn’t until college that I discovered <strong>UX design</strong>, a field that perfectly blends all of my passions.
        </p>
        <p> 
            Adjusting to a new country with a different culture was challenging — I often struggled to fit in and navigate social norms. It was through these experiences that I learnt the importance of <strong>empathy, inclusion, and designing with diverse perspectives in mind</strong>.
        </p>
        <p>
            My background as an immigrant has shaped how I see the world and approach design, giving me a unique perspective on creating experiences that are <strong>inclusive, accessible, and human-centered</strong>. I strive to bring <strong>empathy and clarity</strong> to every project, ensuring that design works for all users, regardless of their background or abilities.
        </p>

        <h2>Interests</h2>
        <p>
        I'm an avid reader with a passion for science fiction and fantasy novels. These genres fuel my imagination and spark my creativity, allowing me to explore new worlds and ideas. I also enjoy listening to music and curating playlists, always making sure I have a great soundtrack for any occasion.
        </p>
        <section className="favorite-books">
        <h2>Favorite Books</h2>
        <div className="books-gallery">
        <div className="book-card">
            <img src="/images/About/RedRising.png" alt="Red Rising" />
            <div className="book-info">
                <strong>Red Rising</strong> <p>A thrilling story that sparked my creativity and love for world-building.</p>
            </div>
        </div>
        <div className="book-card">
            <img src="/images/About/EndersGame.png" alt="Ender's Game" />
            <div className="book-info">
                <strong>Ender's Game</strong> <p>Showcased the power of strategy, leadership, and problem-solving.</p>
            </div>
        </div>
        <div className="book-card">
            <img src="/images/About/SwordOfKaigen.png" alt="The Sword of Kaigen" />
            <div className="book-info">
                <strong>The Sword of Kaigen</strong> <p>A story that highlights resilience, growth, and human relationships.</p>
            </div>
        </div>
        </div>
        </section>
      </section>
    </div>
  );
}

export default About;