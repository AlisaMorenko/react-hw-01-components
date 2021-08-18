import React from 'react';
import defaultImg from './defaultImg.png';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <div className={styles.profile}>
    <div className="description">
      <img src={avatar} alt="Аватар пользователя" width="480" />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li>
        <span className={styles.label}>Followers</span>
        <span>{followers}</span>
      </li>
      <li>
        <span className={styles.label}>Views</span>
        <span>{views}</span>
      </li>
      <li>
        <span className={styles.label}>Likes</span>
        <span>{likes}</span>
      </li>
    </ul>
  </div>
);
Profile.defaultProps = {
  avatar: defaultImg,
  location: 'No information about location',
};
Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  stats: PropTypes.object.isRequired,
};
export default Profile;
