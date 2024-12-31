import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CourseTypes from './components/CourseTypes';
import Courses from './components/Courses';
import CourseTypeCourseAssociations from './components/CourseTypeCourseAssociations';
import StudentRegistrations from './components/StudentRegistrations';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/course-types">Course Types</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/associations">Course Associations</Link></li>
                        <li><Link to="/registrations">Student Registrations</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<h1>Welcome to Course Management</h1>} />
                    <Route path="/course-types" element={<CourseTypes />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/associations" element={<CourseTypeCourseAssociations />} />
                    <Route path="/registrations" element={<StudentRegistrations />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
