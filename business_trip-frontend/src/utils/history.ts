import { createBrowserHistory } from "history";

export const browerHistory = createBrowserHistory();

export const saveCurrentPath = (localtion: any) => {
    if (localtion) {
        sessionStorage.setItem('currentPath', localtion.pathname)
    }
}

export const getCurrentPath = () => {
    const currentPath = sessionStorage.getItem('currentPath');
    if(currentPath) {
        return currentPath.substring(currentPath.lastIndexOf('/') +1);
    }
}
