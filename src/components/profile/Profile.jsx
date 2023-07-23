import {ProfileWrap, Descr, Name, Stats} from './Profile.styled'

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileWrap className="profile">
      <Descr className="description">
        <img
          src={avatar}
          alt={username}
          className="avatar"
          width="100"
          height="100"
        />
        <Name className="name">{username}</Name>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </Descr>

      <Stats className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </Stats>
    </ProfileWrap>
  );
};
