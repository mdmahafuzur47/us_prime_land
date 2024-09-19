export interface INavLinks {
    name: string;
    path: string;
    children?: INavLinks[];
} 

export const navLinks:INavLinks[] = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About Us",
        path: "/aboutUs"
    },
    {
        name: "Properties",
        path: "/properties/land",
        children: [
            {
                name: "Land",
                path: "/properties/land",
            },
            {
                name: "Home",
                path: "/properties/home",
            },
        ]
    },
    {
        name: "Blogs/News",
        path: "/blogs_news"
    },
]