/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import PropTypes from "prop-types";
import defaultPhoto from "../../../src/logo.svg";
import "./Profile.css";

export const Profile = ({ avatar, name, tag, location, stats }) => (
  <>
    <div className="profile">
      <div className="description">
        <img
          src={avatar}
          alt="User photo"
          className="avatar"
          width="100"
          height="150"
        />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="stats-item">
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className="stats-item">
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className="stats-item">
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  </>
);

Profile.defaultProps = {
  avatar: defaultPhoto,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  alt: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
