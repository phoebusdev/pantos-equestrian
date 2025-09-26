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
        title: "Riding Lessons",
        path: "/services/lessons",
        newTab: false,
      },
      {
        id: 32,
        title: "Horse Boarding",
        path: "/services/boarding",
        newTab: false,
      },
      {
        id: 33,
        title: "Training Programs",
        path: "/services/training",
        newTab: false,
      },
      {
        id: 34,
        title: "Summer Camps",
        path: "/services/camps",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Facilities",
    path: "/facilities",
    newTab: false,
  },
  {
    id: 5,
    title: "Pricing",
    path: "/pricing",
    newTab: false,
  },
  {
    id: 6,
    title: "News & Events",
    path: "/blog",
    newTab: false,
  },
  {
    id: 7,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
