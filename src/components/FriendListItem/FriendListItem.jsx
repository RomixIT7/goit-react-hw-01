import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <li className={css.friendListItem}>
      <img className={css.friendImg} src={avatar} alt={name} width="48" />
      <p className={css.friendName}>{name}</p>
      <p
        className={clsx(css.friendOnline, {
          [css.friendOffline]: !isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendListItem;
