import Main from '../main/main';

type appProps = {
  offersNum: number
};

function App({offersNum}: appProps): JSX.Element {
  return <Main offersNum={offersNum} />;
}

export default App;
