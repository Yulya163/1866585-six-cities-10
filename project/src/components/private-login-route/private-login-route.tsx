import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts';
import {useAppSelector} from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateLoginRoute(props: PrivateRouteProps): JSX.Element {
  const {children} = props;
  const {authorizationStatus} = useAppSelector((state) => state);

  return (
    authorizationStatus !== AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Main} />
  );
}

export default PrivateLoginRoute;
