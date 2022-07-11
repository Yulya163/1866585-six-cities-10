import Main from '../../pages/main/main';

type AppScreenProps = {
  rentalOffersCount: number;
}

function App({rentalOffersCount}: AppScreenProps): JSX.Element {
  return (
    <Main rentalOffersCount={rentalOffersCount}/>
  );
}

export default App;
