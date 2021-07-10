import React from "react";
// import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li class="item">
    <span />
    <img class="avatar" src={avatar} alt="" width="48" key={id} />
    <p class="name">{name}</p>
  </li>
);

export default FriendListItem;
