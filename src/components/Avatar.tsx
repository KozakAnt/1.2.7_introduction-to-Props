import defaultUserPhoto from '../assets/photo_default.svg';

interface AvatarProps {
  url?: string | null;
  alt: string;
}

// компонент аватара
function Avatar(props: AvatarProps) {
  return (
    <div className="avatar-container">
      <img className="profile-photo" src={props.url || defaultUserPhoto} alt={props.alt} />
    </div>
  );
}

export default Avatar;