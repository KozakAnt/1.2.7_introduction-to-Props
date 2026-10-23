
interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

// компонент карточки
function InfoCard(props: InfoCardProps) {
  return (
    <div className="card">
      <div className="card-header">{props.title}</div>
      <div className="card-content">{props.children}</div>
    </div>
  );
}

export default InfoCard;