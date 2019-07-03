import config from '../config/Config.json';
import { hasActiveCookie } from '../helpers/Cookie';

const UserHasAuthenticated = () => {
  return hasActiveCookie(config.cookie.name);
}

export default UserHasAuthenticated;