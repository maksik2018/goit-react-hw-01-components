import PropTypes from 'prop-types';
import style from './Profile.module.css';

function Profile ({ name, tag, location, avatar, stats }) {
    const { followers, views, likes } = stats;
    return (<div className={style.profile}>
    <div className={style.description}>
      <img
        src={avatar}
        alt="Аватар пользователя"
        className={style.avatar}
      />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
  
    <ul className={style.stats}>
      <li className = {style.item}>
        <span className="label">Followers</span>
        <span className={style.quantity}>{followers}</span>
      </li>
      <li className ={style.item}>
        <span className="label">Views</span>
        <span className={style.quantity}>{views}</span>
      </li>
      <li className = {style.item}>
        <span className="label">Likes</span>
        <span className={style.quantity}>{likes}</span>
      </li>
    </ul>
  </div> );
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,

};

export default Profile;