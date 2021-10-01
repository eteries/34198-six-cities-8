import Main from '../main/main';

type appProps = {
  offersNum: number
}

function App(props: appProps): JSX.Element {
  return <Main offersNum={ props.offersNum} />;
}

export default App;
