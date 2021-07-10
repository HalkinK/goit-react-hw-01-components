import React from "react";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li className={styles.friendItem}>
    <span className={isOnline ? styles.online : styles.offline} />
    <img className={styles.avatar} src={avatar} alt="" width="48" key={id} />
    <p className={styles.friendName}>{name}</p>
  </li>
);

export default FriendListItem;
