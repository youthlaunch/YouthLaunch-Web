// ===============================
// ELEMENTS
// ===============================

const content = document.getElementById("content");
const homeScreen = document.getElementById("home-screen");

const about = document.getElementById("about");
const guidesBtn = document.getElementById("guides");
const contactBtn = document.getElementById("contact");
const askBtn = document.getElementById("ask");
const teamBtn = document.getElementById("team");
const eventBtn = document.getElementById("event");

const homeBtn = document.getElementById("home");
const searchBtn = document.getElementById("search");
const savedBtn = document.getElementById("saved");
const profileBtn = document.getElementById("profile");

const homeIcon = document.querySelector(".home-icon");


// ===============================
// SCREEN FUNCTIONS
// ===============================

function hideHomeScreen() {
    if (homeScreen) {
        homeScreen.style.display = "none";
    }
}

function showHomeScreen() {
    if (homeScreen) {
        homeScreen.style.display = "block";
    }

    if (content) {
        content.innerHTML = "";
    }
}


// ===============================
// ABOUT US
// ===============================

if (about) {
    about.addEventListener("click", () => {

        hideHomeScreen();

        content.innerHTML = `
            <div class="about-card">

                <h1>About Us</h1>

                <p>
                    YouthLaunch is a youth-led nonprofit dedicated to
                    helping young people turn their ideas into action.
                    We provide resources, guidance, and opportunities
                    that empower students to explore entrepreneurship,
                    leadership, and innovation.
                </p>

                <h2>Our Mission</h2>

                <p>
                    Our mission is to give young people the knowledge,
                    resources, and support they need to develop their
                    ideas and create meaningful change in their
                    communities.
                </p>

            </div>
        `;
    });
}


// ===============================
// CONTACT
// ===============================

if (contactBtn) {
    contactBtn.addEventListener("click", () => {

        hideHomeScreen();

        content.innerHTML = `
            <div class="contact-card">

                <h1>Connect With Us</h1>

                <div class="contact-section">

                    <h2>Instagram</h2>

                    <a
                        href="https://www.instagram.com/launchatyouth"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @launchatyouth
                    </a>

                </div>

                <div class="contact-section">

                    <h2>Email</h2>

                    <p> Founders: </p>
                        <a href="mailto:krishang.thakur11@gmail.com">
                            krishang.thakur11@gmail.com
                        </a>
                    </p>

                    <p>
                        <a href="mailto:arshi2611.agrawal@gmail.com">
                            arshi2611.agrawal@gmail.com
                        </a>
                    </p>

                    <p> Head of Outreach: </p>
                        <a href="mailto:ishanavi.verma@gmail.com">
                            ishanavi.verma@gmail.com
                        </a>
                    </p>
                 Head of Research and Analytics: </p>
                        <a href="mailto: shreyas.bidarkar19@gmail.com">
                            shreyas.bidarkar19@gmail.com
                        </a>
                    </p>    
                </div>

            </div>
        `;
    });
}


// ===============================
// HOME
// ===============================

if (homeIcon) {
    homeIcon.addEventListener("click", () => {
        showHomeScreen();
    });
}

if (homeBtn) {
    homeBtn.addEventListener("click", () => {
        showHomeScreen();
    });
}


// ===============================
// GUIDES
// ===============================

if (guidesBtn) {
    guidesBtn.addEventListener("click", () => {

        hideHomeScreen();

        content.innerHTML = `
            <div class="guides-page">

                <h1>Guides</h1>

                <p>
                    Explore YouthLaunch resources and guides
                    designed to help young people turn their
                    ideas into action.
                </p>

                <div class="guide-card">
                    <h2>Coming Soon</h2>
                    <p>
                        Our guides are currently being developed.
                        Check back soon for new resources!
                    </p>
                </div>

            </div>
        `;
    });
}


// ===============================
// ASK A QUESTION
// ===============================

if (askBtn) {
    askBtn.addEventListener("click", () => {

        window.open(
"https://docs.google.com/forms/d/e/1FAIpQLSdxb4ZE326vZECHd-r2R1YbVoSdVpvL94y-k9NWoDn85Vg3rg/viewform?usp=dialog   "     );

    });
}
if (teamBtn) {
    teamBtn.addEventListener("click", () => {

        hideHomeScreen();

        content.innerHTML = `
            <div class="team-page">

                <h1>Meet the Team</h1>

                <p class="team-intro">
                    YouthLaunch is built by students who are passionate
                    about helping the next generation turn their ideas
                    into action.
                </p>

                <div class="team-grid">

                    <!-- Krishang -->
                    <div class="team-card">

                        <div class="team-avatar">
                            <img class="pfp" src="krishang.png" alt="Krishang Thakur">
                        </div>

                        <h2>Krishang Thakur</h2>

                        <h3>Founder & President</h3>

                        <p class="school">
                            BASIS Phoenix High School
                        </p>

                        <a href="mailto:krishang.thakur11@gmail.com">
                            krishang.thakur11@gmail.com
                        </a>

                        <div class="fun-fact">
                            <strong>Fun Fact</strong>
                            <p>
                                Has played basketball for 8 years.
                            </p>
                        </div>

                    </div>


                    <!-- Arshi -->
                    <div class="team-card">

                        <div class="team-avatar">
                            <img class= "pfp" src="arshi.png" alt="Arshi Agrawal">
                        </div>

                        <h2>Arshi Agrawal</h2>

                        <h3>Co-Founder & Vice President</h3>

                        <p class="school">
                            BASIS Peoria HS
                        </p>

                        <a href="mailto:arshi2611.agrawal@gmail.com">
                            arshi2611.agrawal@gmail.com
                        </a>

                        <div class="fun-fact">
                            <strong>Fun Fact</strong>
                            <p>
                                Professional dancer pursuing her passion.
                            </p>
                        </div>

                    </div>


                    <!-- Ishanavi -->
                    <div class="team-card">

                        <div class="team-avatar">
                            <img class="pfp" src="ishanavi.png" alt="Ishanavi Verma">
                        </div>

                        <h2>Ishanavi Verma</h2>

                        <h3>Head of Outreach</h3>

                        <p class="school">
                            Basha HS
                        </p>

                        <a href="mailto:ishanavi.verma@gmail.com">
                            ishanavi.verma@gmail.com
                        </a>

                        <div class="fun-fact">
                            <strong>Fun Fact</strong>
                            <p>
                                Has practiced karate for 5 years.
                            </p>
                        </div>

                    </div>
                     <!-- Shreyas -->
                    <div class="team-card">

                        <div class="team-avatar">
                            <img class="pfp" src="shreyas.jpeg" alt="Shreyas Bidarkar">
                        </div>

                        <h2>Shreyas Bidarkar</h2>

                        <h3>Head of Research and Analytics</h3>

                        <p class="school">
                            BASIS Phoenix HS
                        </p>

                        <a href="mailto:shreyas.bidarkar19@gmail.com">
                            shreyas.bidarkar19@gmail.com
                        </a>

                        <div class="fun-fact">
                            <strong>Fun Fact</strong>
                            <p>
                                Learns Indian classical singing outside school.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        `;
    });
}
if (eventBtn) {
    eventBtn.addEventListener("click", () => {

        hideHomeScreen();

        content.innerHTML = `
            <div class="events-page">

                <h1>Upcoming Events</h1>

                <p class="events-intro">
                    Stay connected with YouthLaunch and see what
                    we're working on next.
                </p>

                <div class="events-container">

                    <div class="event-card">

                        <div class="event-date">
                            <span class="event-month">AUG</span>
                            <span class="event-day">30</span>
                        </div>

                        <div class="event-info">

                            <h2>YouthLaunch Launch Event</h2>

                            <p class="event-details">
                                📅 August 30, 2026
                            </p>

                            <p class="event-details">
                                📍 Location TBA
                            </p>

                            <p>
                                Join us as we officially launch
                                YouthLaunch and begin building a
                                community of young entrepreneurs,
                                leaders, and innovators.
                            </p>

                            <a
                                href="#"
                                class="event-button"
                            >
                                Learn More
                            </a>

                        </div>

                    </div>


                    <div class="event-card">

                        <div class="event-date">
                            <span class="event-month">SEP</span>
                            <span class="event-day">12</span>
                        </div>

                        <div class="event-info">

                            <h2>Youth Entrepreneurship Workshop</h2>

                            <p class="event-details">
                                📅 September 12, 2026
                            </p>

                            <p class="event-details">
                                📍 Location TBA
                            </p>

                            <p>
                                Learn how to take an idea from the
                                brainstorming stage to something
                                real.
                            </p>

                            <a
                                href="#"
                                class="event-button"
                            >
                                Learn More
                            </a>

                        </div>

                    </div>


                </div>

            </div>
        `;
    });
}
const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
    showHomeScreen();
});