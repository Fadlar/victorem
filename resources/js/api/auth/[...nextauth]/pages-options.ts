import { routes } from "@/config/routes";
// import { PagesOptions } from 'next-auth';

export const pagesOptions: Partial<any> = {
    signIn: routes.signIn,
    error: routes.signIn,
};
