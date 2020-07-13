import { parseJwt } from '../../utils/index.utils';

export const checkAuthorization = () => {
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
        const tokenPayload = parseJwt(storedToken);

        const expiration = new Date(tokenPayload.exp * 1000).getTime();
        const current = new Date().getTime();

        if (current > expiration) return false;

        return true;
    }

    return false;
};