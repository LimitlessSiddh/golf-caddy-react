import React from 'react';
import './Sidebar.css';

function Sidebar({ onSelectCategory }) {
  return (
    <div className="sidebar">
      <h2>Categories</h2>
      <ul>
        <li onClick={() => onSelectCategory('caddySystem')}>Caddy System</li>
        <li onClick={() => onSelectCategory('topCoursesWorld')}>Best Golf Courses in the World</li>
        <li onClick={() => onSelectCategory('topCoursesQuebec')}>Best Golf Courses in Quebec</li>
        <li onClick={() => onSelectCategory('leaderboard')}>Leaderboard</li>
      </ul>
    </div>
  );
}

export default Sidebar;


