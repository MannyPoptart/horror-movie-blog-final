const { MODE } = import.meta.env;

export const isDev = MODE === "development";
export const isProd = MODE === "production";

export const pageSize = 10;

export const siteInfo = {
    siteName: "Horror Movies",
    siteDesc: "A blog covering horror movies",
    lang: "en-us",
    icon: "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9ycm9yfGVufDB8fDB8fHww",
    avatar: "https://images.unsplash.com/photo-1565630030873-6c8231898d49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUxfHxob3Jyb3J8ZW58MHx8MHx8fDA%3D",
    github: "https://github.com/npmrun/art-theme",
    get hero() {
        return (
            "https://images.unsplash.com/photo-1511406361295-0a1ff814c0ce?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvcnJvcnxlbnwwfHwwfHx8MA%3D%3D"
        );
    },
    heroPosition: "center",
    startTime: "12/09/2023",
};

export const nav = [
    {
        title: "About",
        slug: "/about",
        children: [],
    },
    {
        title: "Contact",
        slug: "/contact",
        children: [],
    },
];

export const settings = {
    showTOC: false,
    articleTheme: "github",
    postPicture: "first",
    categories: [
        {
            name: "Demo",
            desc: "Some Demo",
            image:
                "https://picsum.photos/290/80?random=" +
                Math.random() * 1000,
            order: 1,
        },
        {
            name: "Astro",
            desc: "Astro Theme",
            image:
                "https://picsum.photos/290/80?random=" +
                Math.random() * 1000,
            order: 2,
        },
    ],
    categorySettings: {
        order: "count",
    },
};
