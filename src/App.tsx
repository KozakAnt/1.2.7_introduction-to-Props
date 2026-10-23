import myPhoto from './assets/photo_Anton_K.jpg';
import Avatar from './components/Avatar';
import InfoCard from './components/InfoCard';
import './App.css';

interface UserProfile {
  userName: string;
  photoUrl?: string | null;
  userDescription: string;
  openForWork?: boolean;
  contactInfo: {
    email: string;
    phone?: string;
  };
  location?: {
    city: string;
    country: string;
    address?: string;
  };
  interests?: string[];
}

// Главный компонент App
function App() {
  const userProfile: UserProfile = {
    userName: 'Антон К.', // обязательное свойство
    photoUrl: myPhoto, // необязательное свойство
    userDescription: 'Любитель React и фронтенд разработки', // обязательное свойство
    openForWork: true, // необязательное свойство
    contactInfo: {
      // обязательное свойство
      email: 'kozakant@yandex.ru', // обязательное свойство
      phone: '+12345678900', // необязательное свойство
    },
    location: {
      // необязательное свойство
      city: 'Тюмень', // обязательное свойство
      country: 'Россия', // обязательное свойство
      address: 'Район ожидаемых надежд, 45', // необязательное свойство
    },
    interests: ['программирование', 'путешествия', 'валяние дурака'], // необязательное свойство
  };

  return (
    <>
      <div className="description">
        {/* компонент аватар */}
        <Avatar
          url={userProfile.photoUrl}
          alt={userProfile.userName}
        />
        <h4>{userProfile.userName}</h4>
        <p>{userProfile.userDescription}</p>
      </div>

      <div className="main">
        {/* карточка контактов */}
        <InfoCard title="Контактная информация">
          <p>Email: {userProfile.contactInfo.email}</p>
          <p>Телефон: {userProfile.contactInfo.phone}</p>
        </InfoCard>

        {/* карточка местоположения */}
        <InfoCard title="Местоположение">
        {userProfile.location ? (
        <>
          <p>Страна: {userProfile.location.country}</p>
          <p>Город: {userProfile.location.city}</p>
          <p>Адрес: {userProfile.location.address || 'не указан'}</p>
        </>
        ) : (
          <p>Местоположение не указано</p>
        )}
        </InfoCard>


        {/* карточка интересов */}
       <InfoCard title="Интересы">
  {userProfile.interests && userProfile.interests.length > 0 ? (
    <ul className="interests-list">
      {userProfile.interests.map((interest, index) => (
        <li key={index}>{interest}</li>
      ))}
    </ul>
  ) : (
    <p>не указаны</p>
  )}
</InfoCard>

      </div>
    </>
  );
}
export default App;

