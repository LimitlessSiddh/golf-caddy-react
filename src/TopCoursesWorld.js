import React from 'react';
import './TopCoursesWorld.css';



function TopCoursesWorld() {
  const courses = [
    {
      name: 'Pine Valley Golf Club, USA',
      image: 'https://images.app.goo.gl/Yt4LJvNR2ea9emDL8',
      review: 'Pine Valley Golf Club is a golf course in Pine Valley, Camden County, in southern New Jersey. It was ranked the number one course in Golf Magazine\'s 100 Top Courses in the U.S. and the World in 2012, 2015, 2019, 2020 and 2023. It is a private club, and non-members can play only if invited and accompanied by a member. Pine Valley is currently ranked number one in Golf Digest\'s America\'s 100 Greatest Golf Courses.',
    },
    {
      name: 'Cypress Point Club, USA',
      image: 'https://images.app.goo.gl/T5JEEK5t1PQWGant9',
      review: 'Cypress Point Club is a private golf club located in Pebble Beach, California, at the northern end of the Central Coast. Its single 18-hole course has been named as one of the finest in golf, best known for a series of dramatic holes along the Pacific Ocean.',
    },
    {
      name: 'Augusta National Golf Club, USA',
      image: 'https://images.app.goo.gl/zjAZXDfoqQ13inm96',
      review: 'Augusta National Golf Club, sometimes referred to as Augusta National, Augusta, or the National, is a golf club in Augusta, Georgia, United States. The course was designed by Bobby Jones and Alister MacKenzie and opened for play in 1932. Since 1934, the club has played host to the annual Masters Tournament.',
    },
    {
      name: 'Royal County Down, Northern Ireland',
      image: 'https://images.app.goo.gl/Egzn8ps89EHdvWBa7',
      review: 'Royal County Down Golf Club is a golf club in Northern Ireland, located in Newcastle, Newry, Mourne and Down. It opened on 23 March 1889 and is one of the oldest golf clubs in Ireland. It has two 18-hole links courses, the Championship Course and the Annesley Links.',
    },
    {
      name: 'Royal Melbourne (West), Australia',
      image: 'https://images.app.goo.gl/GNmPFPhWRNJm6eGPA',
      review: 'Royal Melbourne Golf Club is a 36-hole golf club in Australia, located in Black Rock, Victoria. Its West and East courses are respectively ranked number 1 and 6 in Australia. The West course is ranked in the top-five courses in the world.',
    },
    {
      name: 'The Old Course at St. Andrews, Scotland',
      image: 'https://images.app.goo.gl/RCxdkARNdtKBtyQf6',
      review: 'The Old Course at St Andrews is considered the oldest golf course in the world. It is a public course over common land in St Andrews, Fife, Scotland, and is held in trust by the St Andrews Links Trust under an act of Parliament.',
    },
    {
      name: 'Shinnecock Hills Golf Club, USA',
      image: 'https://images.app.goo.gl/AwUhsffYxP1dpSVw6',
      review: 'Shinnecock Hills Golf Club is a links-style golf club located in Southampton on Long Island, New York. It has hosted several U.S. Opens, most recently in 2018. It is scheduled to host a sixth in 2026.',
    },
    {
      name: 'Oakmont Country Club, USA',
      image: 'https://images.app.goo.gl/1h6nJBGdR5NvMqRG9',
      review: 'Oakmont Country Club, located in Plum near Pittsburgh, Pennsylvania, is one of the oldest top-ranked golf courses in the United States. It was designated a National Historic Landmark in 1987.',
    },
    {
      name: 'Muirfield, Scotland',
      image: 'https://images.app.goo.gl/bz8pUfzEs5iCnwxK9',
      review: 'Muirfield is a privately owned golf links located in Gullane, East Lothian, Scotland. It has hosted The Open Championship 16 times, most recently in 2013.',
    },
    {
      name: 'National Golf Links of America, USA',
      image: 'https://images.app.goo.gl/hyETc9hzY7p1Gvd7A',
      review: 'National Golf Links of America is a prestigious links-style golf course located in Southampton, New York, between Shinnecock Hills and Peconic Bay. It has hosted the Walker Cup and is known for its exclusivity.',
    },
  ];
  return (
    <div className="top-courses-container">
      <h2></h2>
      {courses.map((course, index) => (
        <div key={index} className="course">
          <h3>{course.name}</h3>
          <img src={course.image} alt={course.name} className="course-image" />
          <p>{course.review}</p>
        </div>
      ))}
    </div>
  );
  
  
  
}

export default TopCoursesWorld;



