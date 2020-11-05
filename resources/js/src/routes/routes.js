import LibraryBooks from "@material-ui/icons/LibraryBooks";
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import SignIn from "../views/SignIn/SignIn";
import News from "../views/News/News";
import AddNews from "../views/News/AddNews";
import EditNews from "../views/News/EditNews";
import Student from "../views/Student/Student";
import AddStudent from "../views/Student/AddStudent";
import EditStudent from "../views/Student/EditStudent";
import ViewStudent from "../views/Student/ViewStudent";
import Gallery from "../views/Gallery/Gallery";
import AddGallery from "../views/Gallery/components/Gallery/AddGallery";
import EditGallery from "../views/Gallery/components/Gallery/EditGallery";
import NewsGallery from "../views/NewGallery/NewsGallery"

const routes = [
    {
        path: `/`,
        exact: true,
        auth: true,
        component: SignIn,
    },
    {
        path: `/login`,
        exact: true,
        auth: false,
        component: SignIn,
    },
    {
        path: `/student`,
        name: "Student",
        exact: true,
        auth: true,
        icon: PeopleOutlineIcon,
        component: Student,
    },
    {
        path: `/student/add`,
        exact: true,
        auth: true,
        component: AddStudent,
    },
    {
        path: `/student/edit/:id`,
        exact: true,
        auth: true,
        component: EditStudent,
    },
    {
        path: `/student/view/:id`,
        exact: true,
        auth: true,
        component: ViewStudent,
    },
    {
        path: `/news`,
        name: "News",
        exact: true,
        auth: true,
        icon: LibraryBooks,
        component: News,
    },
    {
        path: `/news/add`,
        exact: true,
        auth: true,
        component: AddNews,
    },
    {
        path: `/news/edit/:id`,
        exact: true,
        auth: true,
        component: EditNews,
    },
    {
        path: `/news/images/:id`,
        exact: true,
        auth: true,
        component: NewsGallery,
    },
    {
        path: `/gallery`,
        name: "Gallery",
        exact: true,
        auth: true,
        component: Gallery,
        icon: PhotoLibraryIcon,
    },
    {
        path: `/gallery/add`,
        exact: true,
        auth: true,
        component: AddGallery,
    },
    {
        path: `/gallery/edit/:id`,
        exact: true,
        auth: true,
        component: EditGallery
    },
    
];

export default routes;
