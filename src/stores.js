import { writable } from "svelte/store";

export const mainBar = [{
    title: "AddPOI",
    icon: "fas fa-location-arrow fa-3x",
    colour: "color:rgb(153, 196, 74)",
    link: "/#/users",
}, {
    title: "Report",
    icon: "fas fa-clipboard-list fa-3x",
    colour: "color:rgb(63, 122, 139)",
    link: "/#/pois",
}, {
    title: "Logout",
    icon: "fas fa-sign-out-alt fa-3x",
    colour: "color:rgb(156, 70, 128)",
    link: "/#/logout",
}];

export const welcomeBar = [
    {
        title: "Sign Up",
        icon: "fas fa-user-cog fa-3x",
        colour: "color:rgb(63, 160, 155)",
        link: "/#/signup",
    },
    {
        title: "Log In",
        icon: "fas fa-user-edit fa-3x",
        colour: "color:green",
        link: "/#/login",
    },
];

export const navBar = writable({
    bar: [],
});
export const title = writable("");
export const subTitle = writable("");