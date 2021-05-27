import { writable } from "svelte/store";

export const mainBar = [{
    title: "AddPOI",
    icon: "fas fa-location-arrow fa-3x",
    colour: "color:rgb(153, 196, 74)",
    link: "/#/add",
}, {
    title: "Report",
    icon: "fas fa-clipboard-list fa-3x",
    colour: "color:rgb(63, 122, 139)",
    link: "/#/pois",
}, {
    title: "Map",
    icon: "fas fa-map-marked-alt fa-3x",
    colour: "rgb(102, 153, 255)",
    link: "/#/Map",
}, {
    title: "Settings",
    icon: "fas fa-sliders-h fa-3x",
    colour: "color:rgb(14, 168, 160)",
    link: "/#/settings",
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
    {
        title: "Admin Sign Up",
        icon: "fas fa-user-cog fa-3x",
        colour: "color:rgb(120, 50, 39)",
        link: "/#/adminsignup",
    },
    {
        title: "Admin Log In",
        icon: "fas fa-user-edit fa-3x",
        colour: "color:blue",
        link: "/#/adminlogin",
    },
];

export const adminBar = [{
    title: "Dashboard",
    icon: "fas fa-clipboard-list fa-3x",
    colour: "color:rgb(63, 122, 139)",
    link: "/#/admindashboard",
}, {
    title: "Logout",
    icon: "fas fa-sign-out-alt fa-3x",
    colour: "color:rgb(156, 70, 128)",
    link: "/#/logout",
}];

export const user = writable({
    email: "",
    token: ""
});

export const admin = writable({
    email: "",
    token: ""
});

export const navBar = writable({
    bar: [],
});
export const title = writable("");
export const subTitle = writable("");