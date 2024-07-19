import React from 'react';
import './OurTeam.css';
import image1 from '../Pages/Picture/member1.png';
import image2 from '../Pages/Picture/member2.png';
import image3 from '../Pages/Picture/member3.png';
import image4 from '../Pages/Picture/member4.png';


const OurTeam = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      title: 'Founder and CEO',
      image: image1, 
    },
    {
      name: 'Jane Smith',
      title: 'Creative Director',
      image: image2,
    },
   
    {
      name: 'Emily Davis',
      title: 'Marketing Specialist',
      image: image3, 
    },
    {
      name: 'Robert Brown',
      title: 'Sales Manager',
      image: image4, 
    },
  ];

  return (
    <div className="our-team-container">
      <section>
        <h1>Our Team</h1>
        <div className="team-list">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} className="team-member-image" />
              <div className="team-member-info">
                <h2 className="team-member-name">{member.name}</h2>
                <p className="team-member-title">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurTeam;

