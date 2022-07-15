import {Link} from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <>
      <h1 style={{fontSize: '48px', textAlign: 'center', marginTop: '40vh'}}>404 Not Found</h1>
      <Link to="/" style={{fontSize: '20px', textAlign: 'center', display: 'block', textDecoration: 'underline'}}>Вернуться на главную</Link>
    </>
  );

}

export default NotFound;
