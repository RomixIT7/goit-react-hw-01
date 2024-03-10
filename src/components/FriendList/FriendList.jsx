import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {Array.isArray(friends) &&
        friends.map((friend) => {
          return <FriendListItem friend={friend} key={friend.id} />;
        })}
    </ul>
  );
};

export default FriendList;
