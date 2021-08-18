import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from './defaultImg.png';
import styles from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <span className={isOnline ? styles.online : styles.offline} />
    <img src={avatar} alt="Avatar of user" width="48" />
    <p className={styles.name}>{name}</p>
  </>
);

FriendListItem.defaultProps = {
  avatar: defaultImg,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
