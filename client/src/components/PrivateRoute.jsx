import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';


// not usenavite is hook where as Navigate is a built in componenet
export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Outlet /> : <Navigate to='/sign-in' />;

//   hree outlet is a built in component that ues to render child components okay
}