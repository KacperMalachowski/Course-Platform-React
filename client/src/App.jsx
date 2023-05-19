import "./App.css";
import NavBar from "../src/components/NavBar.jsx";
import CoursesSection from "./components/CoursesSection.jsx";
import Login from "./components/Login.jsx";
import NewCourseForm from "./components/NewCourseForm";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <CoursesSection />
        <Login />
        <NewCourseForm />
      </div>
    </>
  );
}

/* TODO 
-
- strona logowanie 
- zgłoszenie nowego szkolenia 
- baza z info o szkoleniach i userach
-
*/
export default App;
