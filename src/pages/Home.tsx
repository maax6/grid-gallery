import { VisitCard } from '../Components/VisitCard/VisitCard';
import { VisitCardProps } from '../Components/VisitCard/VisitCard';
export function Home() {
  const visitCardProps: VisitCardProps = {
    name: 'Rodney Cotton',
    location: 'Helsinki, Finland',
    src: 'src/assets/profilePhoto.png',
    following: 1432,
    followers: 2242,
    posts: 100,
  };
  return <VisitCard {...visitCardProps} />;
}
