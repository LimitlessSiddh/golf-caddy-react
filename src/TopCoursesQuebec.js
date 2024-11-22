import React from 'react';
import './TopCoursesQuebec.css';

function TopCoursesQuebec() {
  const courses = [
    {
      name: 'Club de Golf Le Mirage',
      review: `Graham Cooke, an internationally renowned golf course architect, has succeeded in creating courses entirely planted with bent grass that stand out for their balanced mix of modern and traditional requirements. The Arizona course is typical of courses in the Arizona desert, each hole requiring precision shots (target golf). The Carolina course is distinguished by its traditional style and its 18 holes offering strategic challenges. Whether you choose to play either of these two courses, you will enjoy a unique experience. Both courses have recently been remodelled to follow modern trends for the enjoyment of golfers.`,
    },
    {
      name: 'Royal Montreal Golf Club',
      review: `The Royal Montreal Golf Club (French: Le Club de Golf Royal Montréal) is the oldest golf club in North America, and the oldest in continuous existence, celebrating 150 years in 2023. It was founded in Montreal by eight men in 1873. Permission was granted by Queen Victoria to use the prefix "Royal" in 1884.`,
    },
    {
      name: 'Club de Golf de Fontainebleau',
      review: `A beautiful property that mixes gently rolling countryside and mature woodlands, Rosemere engages golfers right from the first tee shot, including PGA Tour and Champions Tour players. Rosemere Fontainebleau is conveniently located about 35 minutes from downtown Montreal in Blainville, Que. Designed by Graham Cooke and Darrell Huxham, the 7,105-yard, par 72 layout has strong green sites with large putting surfaces that are highly contoured and protected by bold bunkering.`,
    },
    {
      name: 'Laval-sur-le-Lac',
      review: `Laval-sur-le-Lac is a small sector on the western part of Laval and was a separate city until the municipal mergers on August 6, 1965. This community contains North America's oldest French speaking private golf club, Le Club Laval-sur-le-Lac, established in 1917.`,
    },
    {
      name: 'Club de Golf La Tempête',
      review: `Founded in 2003 and officially opened in 2005, Golf La Tempête was born from a grand dream to provide the Quebec and Lévis region with a world-class golf club. Since its opening, La Tempête has hosted two major international events: the Telus Skins World Cup in 2009 and the PGA Tour Champions in 2014.`,
    },
    {
      name: 'Val des Lacs Golf Club',
      review: `Situated thirty-seven miles northwest of downtown Montreal, the course at Club de Golf Val des Lacs is a Howard Watson design that first opened for play in 1959. Playing to a par of 71, the course now extends to 6,621 yards.`,
    },
    {
      name: 'Royal Quebec Golf Club',
      review: `The Royal Quebec Golf Club is a high-end semi-private club that was founded in 1874 and established in Boischatel in 1925. The club has 36 holes and is considered one of the oldest courses in North America. Located just a few steps from the Montmorency Falls, this area is mainly composed of majestic conifers dating back to the last century.`,
    },
    {
      name: 'Club de Golf Islesmere',
      review: `A figurative wedge away from bustling Montreal, the tranquil Club de golf Islesmere boasts a rich history. It's a traditional parkland course that offers an enjoyable but challenging walk through the woods. The original 18 holes of its 27 were designed by Willie Park Jr., one of the game's most revered architects.`,
    },
    {
      name: 'Le Blainvillier',
      review: `Situated on the northern outskirts of Montreal, in the heart of a vast natural forest, Le Blainvillier is a private golf club with 36 holes. It has two championship courses, the Royal and the Heritage, offering exceptional playing conditions. Le Blainvillier is a beautiful challenge for golfers of all levels.`,
    },
  ];

  return (
    <div>
      <h2>Top 10 Golf Courses in Quebec</h2>
      <div>
        {courses.map((course, index) => (
          <div key={index} style={{ marginBottom: '30px' }}>
            <h3>{index + 1}. {course.name}</h3>
            <p>{course.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopCoursesQuebec;

