import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            {/* ---SECTION ONE--- */}

            <div className="home-container">
                <div className="section-one-text-container">
                    <h1 className="section-one-header-text">
                        At Wasteless Bites, we're passionate about fighting food
                        waste and are proud to work alongside partners across
                        the food industry.
                    </h1>
                    <p className="section-one-text">
                        We do our best to reduce food loss and waste. Together,
                        we're making a positive impact on the planet, one bite
                        at a time.
                    </p>
                    <button className="section-one-btn-about-food-waste">
                        About Food Waste
                    </button>
                    <button className="section-one-btn-about-us">
                        About Us
                    </button>
                </div>
                <div className="home-section-one">
                    <video
                        className="home-section-one-video"
                        width="100%"
                        autoPlay
                        muted
                        playsInline
                        loop
                    >
                        <source
                            src="https://res.cloudinary.com/df1zxnn7h/video/upload/v1683561384/Vid_ktsnsq.mp4"
                            type="video/mp4"
                        ></source>
                        <source
                            src="https://res.cloudinary.com/df1zxnn7h/video/upload/v1683561384/Vid_ktsnsq.mp4"
                            type="video/ogg"
                        ></source>
                    </video>
                    <div className="navbar-container-landing-page">
                        <Link to="/">
                            <img
                                className="logo"
                                src="/assets/logo-no-background.png"
                                alt="Wasteless Bites"
                            />
                        </Link>
                        <div className="nav-right-container-landing-page">
                            <Link to="/feed">Feed</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign Up</Link>
                        </div>
                    </div>
                </div>

                {/* --- SECTION TWO --- */}
          <div className="navbar-container-landing-page">
            <Link to="/">
              <img
                className="logo"
                src="/assets/logo-no-background.png"
                alt="Wasteless Bites"
              />
            </Link>
            <div className="nav-right-container-landing-page">
              {user ? (
                <>
                  <Link to="/profile">{user.username}</Link>
                  <Link to="/feed">Feed</Link>
                  <Link to="/singlepost">Map</Link>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Sign Up</Link>
                </>
              )}
            </div>
          </div>
        </div>

        {/* --- SECTION TWO --- */}
                        <div className="individual-box-image-container">
                            <img
                                className="individual-box-image"
                                src="https://media.istockphoto.com/id/1270195607/photo/black-man-smiling-and-texting-on-his-phone.jpg?s=612x612&w=0&k=20&c=gQkOC0t0njvUnPP7NPy3eByGm-5FFp0vTHnDUD8O_Ak="
                            ></img>
                        </div>
                    </section>

                    <section>
                        <div className="organization-box">
                            <h2 className="section-two-inside-box-header">
                                An organization
                            </h2>
                            <p className="section-two-inside-box-text">
                                Are you an organization facing waste problems
                                and don't know what to do with your surplus of
                                food? Discover our solutions to help you
                            </p>
                            <button
                                className="section-two-inside-box-btn"
                                type="submit"
                                onClick={() =>
                                    (window.location.href = '/learnorg')
                                }
                            >
                                Learn more
                            </button>
                        </div>
                        <div className="organization-box-image-container">
                            <img
                                className="organization-box-image"
                                src="https://st2.depositphotos.com/1037987/10278/i/450/depositphotos_102781232-stock-photo-supermarket-workers-standing-in-grocery.jpg"
                            ></img>
                        </div>
                    </section>

                    <section>
                        <div className="donor-box">
                            <h2 className="section-two-inside-box-header">
                                A Donor
                            </h2>
                            <p className="section-two-inside-box-text">
                                Uncover organizations in your area giving away
                                free food or food for a very minimal price. Help
                                our planet today.
                            </p>
                            <button
                                className="section-two-inside-box-btn"
                                type="submit"
                                onClick={() =>
                                    (window.location.href = '/learnindividual')
                                }
                            >
                                Learn More
                            </button>
                        </div>

                        <div className="donor-box-image-container">
                            <img
                                className="donor-box-image"
                                src="https://www.heart.org/-/media/Healthy-Living-Images/Healthy-Eating/happy_businesswoman_eating_salad_on_sunny_day.jpg?h=560&iar=0&mw=960&w=890&hash=F91B0192BD8620C6C5B6BBB6607148CD"
                            ></img>
                        </div>
                    </section>
                </div>

                {/* --- SECTION THREE --- */}

                <div className="home-section-three">
                    <div className="home-section-three-left-container">
                        testing
                    </div>
                    <div className="home-section-three-right-container">
                        testing2
                    </div>
                </div>

                {/* ---SECTION FOUR--- */}

                <div className="home-section-four">
                    <div className="section-four-left-container">
                        <p className="section-four-gif"></p>
                    </div>
                    <div className="section-four-right-container">
                        <h3>Our mission</h3>
                        <h2>
                            Seeking solutions to eliminate waste of any
                            products.
                        </h2>
                        <p>
                            We are committed to creating a sustainable world
                            where no product goes to waste. Our mission is to
                            find innovative solutions that ensure unsold items
                            are repurposed, reused, or upcycled instead of
                            ending up in landfills. We strive to make the most
                            of every resource, including diverting waste towards
                            animal food and other eco-friendly methods.
                        </p>
                        <button
                            type="submit"
                            onClick={() => (window.location.href = '/signup')}
                        >
                            I'm interested!
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home

