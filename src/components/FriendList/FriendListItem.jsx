import PropTypes from 'prop-types';
import style from '../FriendList/FriendList.module.css';

function FriendListItem ({avatar, name, isOnline, id}) {
    return (
<li className={style.item}>
  <span className={isOnline ? style.online : style.offline}>{isOnline}</span>
  <img className={style.avatar} src={avatar} alt="" width="48" />
  <p className={style.name}>{name}</p>
</li>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    
};

export default FriendListItem;