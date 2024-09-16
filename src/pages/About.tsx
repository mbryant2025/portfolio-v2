import React, { useState, useEffect } from 'react';
import ScrollableWidgetPanel from '../components/ScrollableWidgetPanel';
import BackButton from '../components/BackButton';
import OptionalColumns from '../components/OptionalColumns';
import '../styles/about.css'
import PageBottom from '../components/PageBottom';
import Navbar from '../components/Navbar';


const About: React.FC = () => {

    const mobileWidth = 768;
    const [isMobile, setIsMobile] = useState(window.innerWidth < mobileWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsMobile(window.innerWidth < mobileWidth);
        });
    }, []);

    return (
        <>

            <Navbar selected='About' animate={true} lightText={true} />

            <ScrollableWidgetPanel title='About' narrow={true}>


                {/* Intro */}
                <OptionalColumns>
                    <>
                        <img style={{ maxWidth: '400px', maxHeight: '600px' }} src="https://firebasestorage.googleapis.com/v0/b/portfolio-4a3ea.appspot.com/o/about%2Fmichael.JPG?alt=media&token=2ac680a8-1aa9-474d-9435-bf9d216b9967"
                            alt="Michael Bryant" className="about-image" />
                        <div>
                            <h1>
                                Hi, it’s great to meet you!

                            </h1>
                            <p>

                                I’m Michael Bryant and I’ve known I wanted to be an engineer since I was in kindergarten. Ever since then, I’ve been on a relentless journey to learn everything I possibly can about engineering — be it mechanical, electrical, or software. As someone with deep understanding of each of these disciplines, I love robotic systems engineering, and contribute a unique perspective from my diverse personal and professional experiences. Be it machining or machine learning, I love it all!

                            </p>

                            <b>

                                Let’s go through some of the moments that have defined my engineering career.

                            </b>
                        </div>
                    </>
                </OptionalColumns>

                {/* Duke Robotics */}
                <OptionalColumns reverse={true}>
                    <>

                        <div>
                            <h1>
                                Duke Robotics Club
                            </h1>
                            <p>
                                As Co-President of the Duke Robotics Club, I have garnered a tremendous amount of experience developing practical robotic systems.

                            </p>
                            <p>
                                As a group of 40+ members, we design an underwater robot that completes annually in San Diego, California. Built on ROS, the robot incorporates advanced functionality, including sensor fusion through an EFK, computer vision, acoustic tracking, advanced controls, expandable electrical architecture, and a CNC’d frame.
                            </p>

                            <p>
                                I have worked extensively with electrical, software and mechanical design, and have a comprehensive understanding of the system architecture and design decisions.
                            </p>
                        </div>
                        <>
                            <OptionalColumns noMarginBottom={true}>
                                <>
                                    {!isMobile && <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-4a3ea.appspot.com/o/about%2Fdock.jpg?alt=media&token=251bf1e6-05c3-4041-b4e8-f76198cb12f5"
                                        alt="Duke Robotics" className="about-image" />}
                                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-4a3ea.appspot.com/o/about%2Fcrane.jpg?alt=media&token=73edb620-1fe9-47c5-a54e-f227f97f38f1"
                                        alt="Duke Robotics" className="about-image" />
                                    {/* <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-4a3ea.appspot.com/o/about%2Foogway.JPG?alt=media&token=1109deee-3200-4b39-be2b-8d482877f4b7"
                                        alt="Duke Robotics" className="about-image" /> */}
                                </>

                            </OptionalColumns>

                        </>


                    </>
                </OptionalColumns>


                {/* ESPN */}
                <OptionalColumns>
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-4a3ea.appspot.com/o/about%2Fespn.JPG?alt=media&token=9a2b1695-1a5a-4bfa-8eb4-14b57a0ec018"
                        alt="ESPN" className="about-image" style={{ objectPosition: '0 0' }} />
                    <div>
                        <h1>
                            ESPN
                        </h1>
                        <p>
                            In 2024, I served as a Software Engineering Intern at ESPN, getting to work on the Fantasy Sports and Games platform. It was awesome! I got to independently develop a feature that will deploy to the 20M+ users of the ESPN March Madness Tournament Challenge. It was really neat to combine my interests of sports (especially college basketball) and software engineering. What my feature is, you may ask? Well that’s a secret, and you’ll have to check out what’s new this March!

                        </p>

                        <p>
                            I also used my React skills to develop a console to visualize my new API.

                        </p>


                    </div>
                </OptionalColumns>

                {/* Product Design */}
                <OptionalColumns reverse={true}>
                    <div>
                        <h1>
                            Product Design Venture
                        </h1>
                        <p>
                            Me and my buisness partner are currently pursuing a patent for a product we have designed. While we would like to keep the details under wraps for now, we are excited to share more about it in the future.
                        </p>
                        <p>
                            During development, I have learned a lot about the product design process -- not just technical skills like C++ and PCB design, but also about the business side of things. I have learned about patents, trademarks, and how to market a product. I have also learned about the importance of user testing and feedback, and how to iterate on a design to make it better. I also have gained experience in design for manufacturing.
                        </p>
                    </div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-4a3ea.appspot.com/o/about%2Fpcb.png?alt=media&token=7e64ab00-4914-40a9-bb84-6857dd7fb500"
                        alt="Product Design" className="about-image" />
                </OptionalColumns>

                {/* Robotic Research Autonomous Industries */}
                <OptionalColumns>
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-4a3ea.appspot.com/o/about%2Frrai.JPG?alt=media&token=e96306ea-b119-4ec9-a3a4-2d35a0dc80a9"
                        alt="Robotic Research Autonomous Industries" className="about-image" />
                    <div>
                        <h1>
                            Robotic Research Autonomous Industries
                        </h1>
                        <p>
                            In my second internship, I got to combine my interests in a really exciting way. Working in Remote Operations for a robotics company, I got first-hand experience in an enterprise-grade C++ software stack. Specifically, I worked on implementing DDS Router, software that ultimately enabled the team to securely distribute ROS topics over the internet to a remote console.


                        </p>

                        <p>
                            While not assigned to me, I also developed an OpenCV-based image stitching algorithm that integrated multiple camera feeds on the remote console. I recognized the need, proposed the idea to the President of the company, and received approval to develop and deploy my feature. I ultimately demoed the project to the entire company
                        </p>
                    </div>

                </OptionalColumns>

                {/* Duke CS308 */}
                <OptionalColumns reverse={true}>

                    <div>
                        <h1>
                            Duke CS308
                        </h1>
                        <p>
                            In my sophomore year, I took a course called Advanced Software Design and Implementation. It was a fantastic experience, and I learned a lot about software engineering practices. I worked on a team of 11 amazing Duke students and we created a game-maker Java application.
                        </p>
                    </div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-4a3ea.appspot.com/o/about%2F308.jpeg?alt=media&token=d2cb2872-7e3b-4960-9087-f4fc9c2529e6"
                        alt="Duke CS308" className="about-image" />
                </OptionalColumns>

                {/* First Robotics Mentoring */}
                <OptionalColumns>
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-4a3ea.appspot.com/o/about%2Fvalence.JPG?alt=media&token=2fee2378-0681-43c8-92c3-c9a004e2e63b"
                        alt="First Robotics Mentoring" className="about-image" />
                    <div>
                        <h1>
                            FIRST Robotics Mentoring
                        </h1>
                        <p>
                            As a longtime veteran of FIRST Robotics, I leveraged my position in Duke Robotics to establish a mentorship connection with a local high school robotics team.
                        </p>

                        <p>
                            This team now works out of Duke Facilities and many Duke Robotics members mentor the team. I have been able to teach them about mechanical engineering practices, as I have a lot of experience in this area.
                        </p>

                        <p>
                            I travel with the team to competitions, and have been able to see them grow and improve over the years. It has been a great experience, and I have learned a lot about teaching and mentoring.
                        </p>
                    </div>

                </OptionalColumns>


                {/* Ensign-Bickford Aerospace and Defense */}
                <OptionalColumns reverse={true}>

                    <div>
                        <h1>
                            Ensign-Bickford Aerospace and Defense
                        </h1>
                        <p>
                            In my first internship, I worked as an Electronics Products Engineer, which ultimately gave me fantastic insight into electronics manufacturing.

                        </p>

                        <p>
                            My initial task was to perform data entry for the majority of the summer. However, I developed software that would automate this task, and finished this in less than two weeks.
                        </p>

                        <p>
                            With the extra time I had, I developed a different program that would perform design checking on engineers’ PCB, but specifically trained on the limitations of the company’s manufacturing process.
                        </p>

                        <p>
                            During the summer, I became known as the go-to person for automating tasks, and helped many electrical engineers with their automation projects.
                        </p>
                    </div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-4a3ea.appspot.com/o/about%2Febad_group.jpeg?alt=media&token=d59bc340-645a-46ea-9a93-bf97da0fb89b"
                        alt="Ensign-Bickford Aerospace and Defense" className="about-image" />
                </OptionalColumns>

                {/* Personal Workshop */}
                <OptionalColumns>
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-4a3ea.appspot.com/o/about%2Fworkshop.JPG?alt=media&token=69146df2-bc1e-456b-9c62-150721bd0ce5"
                        alt="Personal Workshop" className="about-image" />
                    <div>
                        <h1>
                            Building My Workshop
                        </h1>
                        <p>
                            I invest a significant portion of my money into my projects and the tools I use to build them. As you will see below, I have a lot of tools and equipment that I have purchased over the years. I have a lot of fun building and using these tools, and I am always looking for new tools to add to my collection.
                        </p>

                        <p>
                            All of these tools are my own, as none of my family members are engineers. At this point, I've taken over the basement with my workshop.
                        </p>
                    </div>

                </OptionalColumns>

                {/* PC Building */}
                <OptionalColumns reverse={true}>

                    <div>
                        <h1>
                            Building My PC
                        </h1>
                        <p>
                            Coming from a family that uses exclusively Apple computers, I had long recognized the importance of Linux and Windows. I slowly accumulated parts (was interrupted by a pandemic in doing so) and finally built my PC in the summer of 2020. I learned a lot about the hardware and software of computers. I now use it for all of my software development needs.

                        </p>
                        <p>
                            If you're curious, here are the specs (→ indicates an upgrade made later):
                        </p>

                        <ul>
                            <li>AMD Ryzen 7 2700X</li>
                            <li>1650 Super → 3060 12GB</li>
                            <li>ASRock B450 Pro4</li>
                            <li>16 GB Corsair Vengeance LPX DDR4 → +32 GB Corsair Vengeance LPX DDR4</li>
                            <li>1 TB Samsung 870 QVO → 2 TB Samsung 970 EVO M.2</li>
                            <li>2 TB Seagate Barracuda HDD</li>
                            <li>Thermaltake Versa H18</li>
                            <li>EVGA SuperNOVA 500W Bronze</li>
                            <li>Windows 11</li>
                            <li>Ubuntu 22.04</li>
                        </ul>
                    </div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-4a3ea.appspot.com/o/about%2Fpc.JPG?alt=media&token=75804d88-6e04-475a-aea7-f8cfc563c1d7"
                        alt="PC Building" className="about-image" style={{ objectPosition: '0 0' }} />

                </OptionalColumns>

                {/* Osciolloscope */}
                <OptionalColumns>
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-4a3ea.appspot.com/o/about%2Fscope.JPG?alt=media&token=ad8cf7ec-1d6d-4b69-a047-c0117939f2b0"
                        alt="Oscilloscope" className="about-image" />
                    <div>
                        <h1>
                            Purchasing Oscilloscope
                        </h1>
                        <p>
                            By my 17th birthday, I had saved up enough money to purchase my first oscilloscope. This was a huge moment for me, as it was the first piece of professional equipment I had ever owned. I was able to use it to debug my projects, and it was a huge step up from the multimeter I had been using before.
                        </p>
                    </div>

                </OptionalColumns>

                {/* FIRST Robotics */}
                <OptionalColumns reverse={true}>

                    <div>
                        <h1>
                            FIRST Robotics Competition
                        </h1>
                        <p>
                            I was Captain of my high school's FIRST Robotics Competition team, a group I was on for for six years, starting when I was in seventh grade. I learned a lot about robotics and engineering, and it was a great experience that would shape my future career. I was able to apply what I learned in the competition to my own projects, and it was a great way to advance my skills.
                        </p>
                        <p>
                            The during my tenure, the club participated in various outreach activities, including a robotics camp for elementary school students, STEM advocacy at the State Capitol, and home rennovation for a veteran family in need.
                        </p>
                    </div>

                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-4a3ea.appspot.com/o/about%2Ffrc.png?alt=media&token=ebe9f4cf-782e-4dca-8710-115782519dcc"
                        alt="FIRST Robotics" className="about-image" />

                </OptionalColumns>

                {/* 3D Printer */}
                <OptionalColumns>

                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-4a3ea.appspot.com/o/about%2Fprinter.JPG?alt=media&token=01b3fba4-c566-490a-ae5c-af193375e158"
                        alt="3D Printer" className="about-image" />

                    <div>
                        <h1>
                            Purchasing 3D Printer
                        </h1>
                        <p>
                            For my many projects, I realized the utility of a 3D printer. In 10th grade, I bought a Creality Ender 3, and it has been a game changer for my projects. I have used it to print parts for practically every project since purchasing.

                            I've since installed OctoPrint on a Raspberry Pi, and have been using it to remotely control my printer. I've also built an enclosure for it.
                        </p>
                    </div>


                </OptionalColumns>

                {/* FIRST Lego League Mentoring */}
                <OptionalColumns reverse={true}>



                    <div>
                        <h1>
                            FIRST Lego League Mentoring
                        </h1>
                        <p>
                            I have been a mentor for a FIRST Lego League team. I love teaching the next generation of engineers, and it is a great way to give back to the community.
                        </p>
                    </div>

                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-4a3ea.appspot.com/o/about%2Ffll_ment.jpeg?alt=media&token=9c562cfc-57fc-45e5-be4d-e4a3879c7e1c"
                        alt="FIRST Lego League Mentoring" className="about-image" />

                </OptionalColumns>

                {/* Tool Chest */}
                <OptionalColumns>

                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-4a3ea.appspot.com/o/about%2Ftool.jpeg?alt=media&token=9b46b478-45b2-4b6e-87db-840d97f8a1dd"
                        alt="Tool Chest" className="about-image" style={{ objectPosition: '0 0' }} />

                    <div>
                        <h1>
                            Getting My First Tool Chest
                        </h1>
                        <p>
                            In 8th grade, I saved up enough money to purchase my first tool chest. This allowed me to store my growing tool collection and have a good excuse to buy more for my projects. Getting it into the basement was a pain!
                        </p>
                        <p>
                            I would later purchase a second chest to store additional tools and electronics equipment.
                        </p>
                    </div>



                </OptionalColumns>


                {/* Soldering Iron */}
                <OptionalColumns reverse={true}>

                    <div>
                        <h1>
                            Purchasing Soldering Iron
                        </h1>
                        <p>
                            In 7th grade, I purchased my first soldering iron. I used it to build many projects, my first of which was a battery tester. In fact, I still use this same soldering iron today and have never had to replace the tip.
                        </p>
                    </div>

                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-4a3ea.appspot.com/o/about%2Fsolder.jpeg?alt=media&token=c76602bc-17d7-4c73-ad43-413cb441f644"
                        alt="Soldering Iron" className="about-image" />

                </OptionalColumns>

                {/* First Lego League */}
                <OptionalColumns>

                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-4a3ea.appspot.com/o/about%2Ffll.jpeg?alt=media&token=f19ef2ed-f398-4083-9403-52fb091cebee"
                        alt="First Lego League" className="about-image" />

                    <div>
                        <h1>
                            FIRST Lego League
                        </h1>
                        <p>
                            In 6th grade, I joined a FIRST Lego League team where I learned a lot about robotics and programming. I was able to apply what I learned in the competition to my own projects, and it was a great way to get started in robotics.
                        </p>
                        <p>
                            I designed what I called a "universal attachment," which was used to easily switch mechanisms. As a result, the team qualified for the state competition, the first time ever.
                        </p>
                    </div>



                </OptionalColumns>

                {/* Lego Creations */}
                <OptionalColumns reverse={true}>

                    <div>
                        <h1>
                            Lego Creations
                        </h1>
                        <p>
                            Using the Lego toys I had, I developed some rather complex creations as a kid. This included an automatic transmission, a planimeter, auto-parking trucks, and drivetrains that included Ackerman steering combined with suspention and a differential.
                        </p>
                    </div>

                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-4a3ea.appspot.com/o/about%2Flego.JPG?alt=media&token=164748c8-76ec-4794-a2bb-75c9e0ea518d"
                        alt="Lego Creations" className="about-image" />

                </OptionalColumns>





            </ScrollableWidgetPanel>

            <PageBottom />

        </>
    );
};

export default About;

