import "./App.css";
import NavBar from "../src/components/NavBar.jsx";
import CoursesSection from "./components/CoursesSection.jsx";
import Login from "./components/Login.jsx";
import NewCourseForm from "./components/NewCourseForm.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CoursesSection />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/new-course",
      element: <NewCourseForm />,
    },
  ]);

  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
};

/* TODO 
- strona logowanie 
- zgłoszenie nowego szkolenia 
- baza z info o szkoleniach i userach
-
*/
export default App;
