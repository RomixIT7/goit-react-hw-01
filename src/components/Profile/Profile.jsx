import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileContainer}>
      <div className={css.userInfoContainer}>
        <img className={css.userImg} src={image} alt={name} />
        <p className={css.userName}>{name}</p>
        <p className={css.additionalInfo}>@{tag}</p>
        <p className={css.additionalInfo}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsListItem}>
          <span className={css.statsListItemKey}>Followers</span>
          <span className={css.statsListItemValue}>{stats.followers}</span>
        </li>
        <li className={css.statsListItem}>
          <span className={css.statsListItemKey}>Views</span>
          <span className={css.statsListItemValue}>{stats.views}</span>
        </li>
        <li className={css.statsListItem}>
          <span className={css.statsListItemKey}>Likes</span>
          <span className={css.statsListItemValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
