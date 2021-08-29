import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

function FriendList ({friends}) {
    return (

        <ul className="friend-list"> {friends.map((friend) =>
        // ( <li key={friend.id}>
            
            <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            />
            
        )}
 
</ul>

    )};

    FriendList.propTypes = {
        friends: PropTypes.array.isRequired,
        id: PropTypes.number,
      };



export default FriendList;

