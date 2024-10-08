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
        path: "/blogs&news"
    },
]
export const adminNavLinks:INavLinks[] = [
    {
        name: "Dashboard",
        path: "/admin/dashboard"
    },
    {
        name: "Property Management",
        path: "/admin/propertyManagement"
    },
    {
        name: "Blog Management",
        path: "/admin/blogManagement"
    },
    {
        name: "Lead Collection",
        path: "/admin/leadCollection"
    },
    {
        name: "Configuration",
        path: "/admin/configuration"
    },
]