import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div className={css.persInfo}>
        <img className={css.avatar} src={image} alt="User avatar" width="100" />
        <p className={css.name}>{name}</p>
        <p className={css.descr}>@{tag}</p>
        <p className={css.descr}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.listItem}>
          <span className={css.listTitle}>Followers</span>
          <span className={css.listValue}>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.listTitle}>Views</span>
          <span className={css.listValue}>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.listTitle}>Likes</span>
          <span className={css.listValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
