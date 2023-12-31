import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Our Services",
        path: "/services",
        newTab: false,
      },
      {
        id: 32,
        title: "Web Development",
        path: "/web-development-company",
        newTab: false,
      },
      {
        id: 33,
        title: "eCommerce Development",
        path: "/ecommerce-development-services",
        newTab: false,
      },
      {
        id: 34,
        title: "Mobile App Development",
        path: "/mobile-app-development",
        newTab: false,
      },
      {
        id: 35,
        title: "Custom Software Development",
        path: "/software-development-company",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "FAQ",
    path: "/faq",
    newTab: false,
  },
  //   {
  //     id: 4,
  //     title: "Pages",
  //     newTab: false,
  //     submenu: [
  //       {
  //         id: 41,
  //         title: "About Page",
  //         path: "/about",
  //         newTab: false,
  //       },
  //       {
  //         id: 42,
  //         title: "Contact Page",
  //         path: "/contact",
  //         newTab: false,
  //       },
  //       {
  //         id: 43,
  //         title: "Blog Grid Page",
  //         path: "/blog",
  //         newTab: false,
  //       },
  //       {
  //         id: 44,
  //         title: "Blog Sidebar Page",
  //         path: "/blog-sidebar",
  //         newTab: false,
  //       },
  //       {
  //         id: 45,
  //         title: "Blog Details Page",
  //         path: "/blog-details",
  //         newTab: false,
  //       },
  //       {
  //         id: 46,
  //         title: "Sign In Page",
  //         path: "/signin",
  //         newTab: false,
  //       },
  //       {
  //         id: 47,
  //         title: "Sign Up Page",
  //         path: "/signup",
  //         newTab: false,
  //       },
  //       {
  //         id: 48,
  //         title: "Error Page",
  //         path: "/error",
  //         newTab: false,
  //       },
  //     ],
  //   },
];
export default menuData;
