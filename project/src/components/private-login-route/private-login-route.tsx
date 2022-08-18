import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts';

type PrivateRouteProps = {
  children: JSX.Element;
  authorizationStatus: AuthorizationStatus;
}

function PrivateLoginRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus !== AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Main} />
  );
}

export default PrivateLoginRoute;
