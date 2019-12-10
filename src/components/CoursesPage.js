import React, { useState, useEffect } from 'react';
import { getCourses } from "../api/courseApi";
import CourseList from "../components/CourseList";
import { Link } from 'react-router-dom';

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(_courses => setCourses(_courses));
  }, []);   //Addition parameter is dependency array, Empty array will end up by calling API only once.


  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} />
    </>
  );

}

export default CoursesPage;