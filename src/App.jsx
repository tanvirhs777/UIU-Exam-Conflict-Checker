import React, { useState } from 'react';

// Your course data
const courseData = [
    { "program": "BSCSE", "code": "ENG 1011", "title": "English I", "day": 1, "slot": "T1" },
    { "program": "BSCSE", "code": "BDS 1201", "title": "History of the Emergence of Bangladesh", "day": 6, "slot": "T1" },
    { "program": "BSCSE", "code": "CSE 1110", "title": "Introduction to Computer Systems", "day": null, "slot": null },
    { "program": "BSCSE", "code": "MATH 1151", "title": "Fundamental Calculus", "day": 2, "slot": "T2" },
  
    { "program": "BSCSE", "code": "ENG 1013", "title": "English II", "day": 1, "slot": "T2" },
    { "program": "BSCSE", "code": "CSE 1111", "title": "Structured Programming Language", "day": 4, "slot": "T2" },
    { "program": "BSCSE", "code": "CSE 1112", "title": "Structured Programming Language Laboratory", "day": null, "slot": null },
    { "program": "BSCSE", "code": "CSE 2213", "title": "Discrete Mathematics", "day": 3, "slot": "T2" },
  
    { "program": "BSCSE", "code": "MATH 2183", "title": "Calculus and Linear Algebra", "day": 1, "slot": "T3" },
    { "program": "BSCSE", "code": "PHY 2105", "title": "Physics", "day": 7, "slot": "T3" },
    { "program": "BSCSE", "code": "PHY 2106", "title": "Physics Lab", "day": null, "slot": null },
    { "program": "BSCSE", "code": "CSE 2215", "title": "Data Structure and Algorithms I", "day": 4, "slot": "T2" },
    { "program": "BSCSE", "code": "CSE 2216", "title": "Data Structure and Algorithms I Laboratory", "day": null, "slot": null },
  
    { "program": "BSCSE", "code": "MATH 2201", "title": "Coordinate Geometry and Vector Analysis", "day": 5, "slot": "T1" },
    { "program": "BSCSE", "code": "CSE 1325", "title": "Digital Logic Design", "day": 3, "slot": "T3" },
    { "program": "BSCSE", "code": "CSE 1326", "title": "Digital Logic Design Lab", "day": null, "slot": null },
    { "program": "BSCSE", "code": "CSE 1115", "title": "Object Oriented Programming", "day": 6, "slot": "T2" },
    { "program": "BSCSE", "code": "CSE 1116", "title": "Object Oriented Programming Lab", "day": null, "slot": null },
  
    { "program": "BSCSE", "code": "MATH 2205", "title": "Probability and Statistics", "day": 2, "slot": "T3" },
    { "program": "BSCSE", "code": "SOC 2101", "title": "Society, Technology and Engineering Ethics", "day": 1, "slot": "T3" },
    { "program": "BSCSE", "code": "CSE 2217", "title": "Data Structure and Algorithms II", "day": 5, "slot": "T2" },
    { "program": "BSCSE", "code": "CSE 2218", "title": "Data Structure and Algorithms II Laboratory", "day": null, "slot": null },
    { "program": "BSCSE", "code": "EEE 2113", "title": "Electrical Circuits", "day": 6, "slot": "T3" },
  
    { "program": "BSCSE", "code": "CSE 3521", "title": "Database Management Systems", "day": 2, "slot": "T1" },
    { "program": "BSCSE", "code": "CSE 3522", "title": "Database Management Systems Lab", "day": null, "slot": null },
    { "program": "BSCSE", "code": "EEE 2123", "title": "Electronics", "day": 6, "slot": "T3" },
    { "program": "BSCSE", "code": "EEE 2124", "title": "Electronics Lab", "day": null, "slot": null },
    { "program": "BSCSE", "code": "CSE 4165", "title": "Web Programming", "day": 7, "slot": "T1" },
  
    { "program": "BSCSE", "code": "CSE 3313", "title": "Computer Architecture", "day": 1, "slot": "T3" },
    { "program": "BSCSE", "code": "CSE 2118", "title": "Advanced Object Oriented Programming Lab", "day": null, "slot": null },
    { "program": "BSCSE", "code": "BIO 3105", "title": "Biology for Engineers", "day": 3, "slot": "T3" },
    { "program": "BSCSE", "code": "CSE 3411", "title": "System Analysis and Design", "day": 5, "slot": "T1" },
    { "program": "BSCSE", "code": "CSE 3412", "title": "System Analysis and Design Lab", "day": null, "slot": null },
  
    { "program": "BSCSE", "code": "CSE 4325", "title": "Microprocessors and Microcontrollers", "day": 2, "slot": "T2" },
    { "program": "BSCSE", "code": "CSE 4326", "title": "Microprocessors and Microcontrollers Lab.", "day": null, "slot": null },
    { "program": "BSCSE", "code": "CSE 3421", "title": "Software Engineering", "day": 5, "slot": "T3" },
    { "program": "BSCSE", "code": "CSE 3422", "title": "Software Engineering Lab", "day": null, "slot": null },
    { "program": "BSCSE", "code": "CSE 3811", "title": "Artificial Intelligence", "day": 3, "slot": "T1" },
    { "program": "BSCSE", "code": "CSE 3812", "title": "Artificial Intelligence Lab", "day": null, "slot": null },
  
    { "program": "BSCSE", "code": "CSE 2233", "title": "Theory of Computation", "day": 7, "slot": "T2" },
    { "program": "BSCSE", "code": "PMG 4101", "title": "Project Management", "day": 3, "slot": "T2" },
    { "program": "BSCSE", "code": "CSE 3711", "title": "Computer Networks", "day": 4, "slot": "T3" },
    { "program": "BSCSE", "code": "CSE 3712", "title": "Computer Networks Lab", "day": null, "slot": null },
    { "program": "BSCSE", "code": "CSE 4509", "title": "Operating Systems", "day": 1, "slot": "T1" },
  
    { "program": "BSCSE", "code": "CSE 4510", "title": "Operating Systems Laboratory", "day": null, "slot": null },
    { "program": "BSCSE", "code": "CSE 4000 B", "title": "Final Year Design Project - II", "day": null, "slot": null },
    { "program": "BSCSE", "code": "CSE 4531", "title": "Computer Security", "day": 6, "slot": "T3" },
  
    { "program": "BSCSE", "code": "EEE 4261", "title": "Green Computing", "day": 5, "slot": "T1" },
    { "program": "BSCSE", "code": "ECO 4101", "title": "Economics", "day": 6, "slot": "T1" },
    { "program": "BSCSE", "code": "ACT 2111", "title": "Financial and Managerial Accounting", "day": 2, "slot": "T3" },
    { "program": "BSCSE", "code": "IPE 3401", "title": "Industrial and Operational Management", "day": 1, "slot": "T1" },
    { "program": "BSCSE", "code": "TEC 2499", "title": "Technology Entrepreneurship", "day": 3, "slot": "T2" },
  
    { "program": "BSCSE", "code": "CSE 4611", "title": "Compiler Design", "day": 4, "slot": "T1" },
    { "program": "BSCSE", "code": "CSE 4621", "title": "Computer Graphics", "day": 2, "slot": "T1" },
    { "program": "BSCSE", "code": "CSE 4783", "title": "Cryptography", "day": 6, "slot": "T2" },
    { "program": "BSCSE", "code": "CSE 4777", "title": "Network Security", "day": 3, "slot": "T3" },
    { "program": "BSCSE", "code": "CSE 4587", "title": "Cloud Computing", "day": 3, "slot": "T3" },
    { "program": "BSCSE", "code": "CSE 4889", "title": "Machine Learning", "day": 1, "slot": "T3" },
    { "program": "BSCSE", "code": "CSE 4891", "title": "Data Mining", "day": 7, "slot": "T1" },
    { "program": "BSCSE", "code": "CSE 4883", "title": "Digital Image Processing", "day": 4, "slot": "T3" },
    { "program": "BSCSE", "code": "CSE 4451", "title": "Human Computer Interaction", "day": 3, "slot": "T1" },
    { "program": "BSCSE", "code": "CSE 4435", "title": "Software Architecture", "day": 4, "slot": "T2" },
    { "program": "BSCSE", "code": "CSE 4181", "title": "Mobile Application Development", "day": 6, "slot": "T3" },
    { "program": "BSCSE", "code": "CSE 4495", "title": "Software Testing and Quality Assurance", "day": 7, "slot": "T3" },
    { "program": "BSCSE", "code": "CSE 4945", "title": "UI: Concepts and Design", "day": 1, "slot": "T2" },
  
    { "program": "BSDS", "code": "DS 1501", "title": "Programming for Data Science", "day": 4, "slot": "T2" },
    { "program": "BSDS", "code": "DS 1502", "title": "Programming for Data Science Laboratory", "day": null, "slot": null },
    { "program": "BSDS", "code": "ENG 1011", "title": "English I", "day": 1, "slot": "T1" },
    { "program": "BSDS", "code": "BDS 1201", "title": "History of the Emergence of Bangladesh", "day": 6, "slot": "T1" },
  
    { "program": "BSDS", "code": "ENG 1013", "title": "English - II", "day": 1, "slot": "T2" },
    { "program": "BSDS", "code": "MATH 1151", "title": "Fundamental Calculus", "day": 2, "slot": "T2" },
    { "program": "BSDS", "code": "DS 1115", "title": "Object Oriented Programming for Data Science", "day": 6, "slot": "T2" },
    { "program": "BSDS", "code": "DS 1116", "title": "Object Oriented Programming for Data Science Laboratory", "day": null, "slot": null },
  
    { "program": "BSDS", "code": "DS 1101", "title": "Fundamentals of Data Science", "day": 5, "slot": "T2" },
    { "program": "BSDS", "code": "BIO 3107", "title": "Biology", "day": 3, "slot": "T3" },
    { "program": "BSDS", "code": "MATH 2107", "title": "Linear Algebra", "day": 1, "slot": "T3" },
    { "program": "BSDS", "code": "PHY 2105", "title": "Physics", "day": 7, "slot": "T3" },
    { "program": "BSDS", "code": "PHY 2106", "title": "Physics Lab", "day": null, "slot": null },
  
    { "program": "BSDS", "code": "CSE 2215", "title": "Data Structures and Algorithms I", "day": 4, "slot": "T2" },
    { "program": "BSDS", "code": "CSE 2216", "title": "Data Structures and Algorithms - I Laboratory", "day": null, "slot": null },
    { "program": "BSDS", "code": "MATH 1153", "title": "Advanced Calculus", "day": 5, "slot": "T1" },
    { "program": "BSDS", "code": "CSE 2213", "title": "Discrete Mathematics", "day": 3, "slot": "T2" },
  
    { "program": "BSDS", "code": "ACT 2111", "title": "Financial and Managerial Accounting", "day": 2, "slot": "T3" },
    { "program": "BSDS", "code": "ECO 4101", "title": "Economics", "day": 6, "slot": "T1" },
    { "program": "BSDS", "code": "IPE 3401", "title": "Industrial and Operational Management", "day": 1, "slot": "T1" },
    { "program": "BSDS", "code": "SOC 2102", "title": "Society, Environment and Computing Ethics", "day": 1, "slot": "T3" },
    { "program": "BSDS", "code": "PSY 2101", "title": "Psychology", "day": 7, "slot": "T1" },
    { "program": "BSDS", "code": "TEC 2499", "title": "Technology Entrepreneurship", "day": 3, "slot": "T2" },
  
    { "program": "BSDS", "code": "CSE 2217", "title": "Data Structures and Algorithms II", "day": 5, "slot": "T2" },
    { "program": "BSDS", "code": "CSE 2218", "title": "Data Structures and Algorithms - II Laboratory", "day": null, "slot": null },
    { "program": "BSDS", "code": "MATH 2205", "title": "Probability and Statistics", "day": 2, "slot": "T3" },
    { "program": "BSDS", "code": "DS 3885", "title": "Data Wrangling", "day": 1, "slot": "T2" },
  
    { "program": "BSDS", "code": "CSE 3521", "title": "Database Management Systems", "day": 2, "slot": "T1" },
    { "program": "BSDS", "code": "CSE 3522", "title": "Database Management Systems Laboratory", "day": null, "slot": null },
    { "program": "BSDS", "code": "DS 3101", "title": "Advanced Probability and Statistics", "day": 4, "slot": "T3" },
    { "program": "BSDS", "code": "DS 3521", "title": "Data Visualization", "day": 6, "slot": "T1" },
    { "program": "BSDS", "code": "DS 3522", "title": "Data Visualization Lab", "day": null, "slot": null },
  
    { "program": "BSDS", "code": "DS 4889", "title": "Machine Learning", "day": 1, "slot": "T3" },
    { "program": "BSDS", "code": "DS 4523", "title": "Simulation and Modeling", "day": 4, "slot": "T3" },
    { "program": "BSDS", "code": "DS 4891", "title": "Data Analytics", "day": 6, "slot": "T2" },
    { "program": "BSDS", "code": "DS 4892", "title": "Data Analytics Laboratory", "day": null, "slot": null },
    { "program": "BSDS", "code": "DS 3120", "title": "Technical Report Writing and Presentation", "day": null, "slot": null }
];

const ExamRoutineApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [conflictMessage, setConflictMessage] = useState('');
  const [showConflict, setShowConflict] = useState(false);

  // Day mapping
  const dayNames = {
    1: 'Day 1',
    2: 'Day 2', 
    3: 'Day 3',
    4: 'Day 4',
    5: 'Day 5',
    6: 'Day 6',
    7: 'Day 7'
  };

  // Time slot mapping
  const timeSlots = {
    'T1': '9:00 - 11:00 AM',
    'T2': '11:30 - 1:30 PM',
    'T3': '2:00 - 4:00 PM'
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    
    // Filter courses that have scheduled exams (day and slot are not null)
    const results = courseData
      .filter(course => course.day !== null && course.slot !== null)
      .filter(course =>
        course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.program.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
    setSearchResults(results);
    setShowResults(true);
  };

  const checkTimeConflict = (newCourse) => {
    for (let existingCourse of selectedCourses) {
      // Check if same day and same time slot
      if (existingCourse.day === newCourse.day && existingCourse.slot === newCourse.slot) {
        return {
          hasConflict: true,
          conflictCourse: existingCourse
        };
      }
    }
    return { hasConflict: false };
  };

  const addCourse = (course) => {
    // Check if course is already added
    if (selectedCourses.some(c => c.code === course.code)) {
      setConflictMessage(`${course.code} is already in your exam schedule!`);
      setShowConflict(true);
      return;
    }

    const conflict = checkTimeConflict(course);
    
    if (conflict.hasConflict) {
      setConflictMessage(
        `Schedule Conflict! ${course.code} (${course.title}) is scheduled on ${dayNames[course.day]} at ${timeSlots[course.slot]}, which conflicts with ${conflict.conflictCourse.code} (${conflict.conflictCourse.title})`
      );
      setShowConflict(true);
    } else {
      setSelectedCourses([...selectedCourses, course]);
      setShowResults(false);
      setSearchTerm('');
    }
  };

  const removeCourse = (courseCode) => {
    setSelectedCourses(selectedCourses.filter(course => course.code !== courseCode));
  };

  const closeConflictPopup = () => {
    setShowConflict(false);
    setConflictMessage('');
  };

  // Sort selected courses by day and time slot
  const sortedCourses = [...selectedCourses].sort((a, b) => {
    if (a.day !== b.day) return a.day - b.day;
    return a.slot.localeCompare(b.slot);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          UIU Exam Routine Conflict Checker
        </h1>
        <p className="text-center text-gray-600 mb-8">Search and add courses to check for exam schedule conflicts</p>

        {/* Search Section - Centered */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-2xl">
            <div className="flex gap-3 bg-white rounded-lg shadow-lg p-2">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by course code, title, or program"
                className="flex-1 px-4 py-3 text-lg border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <button
                onClick={handleSearch}
                className="px-8 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Search Results */}
          {showResults && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Search Results</h2>
              {searchResults.length > 0 ? (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {searchResults.map((course, index) => (
                    <div key={`${course.code}-${index}`} className="flex justify-between items-start p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <div className="flex-1">
                        <div className="font-semibold text-lg text-gray-800">{course.code}</div>
                        <div className="text-gray-600 mb-1">{course.title}</div>
                        <div className="text-sm text-blue-600 font-medium">{course.program}</div>
                        <div className="text-sm text-gray-500 mt-2">
                          <span className="font-medium">Exam:</span> {dayNames[course.day]} at {timeSlots[course.slot]}
                        </div>
                      </div>
                      <button
                        onClick={() => addCourse(course)}
                        className="ml-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                      >
                        Add Course
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-gray-500 text-lg">No courses found matching your search</div>
                  <div className="text-gray-400 text-sm mt-2">Try searching with course code, title, or program name</div>
                </div>
              )}
            </div>
          )}

          {/* Selected Courses */}
          <div className="bg-white rounded-lg shadow-lg p-6 exam-schedule-card">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Exam Schedule</h2>
            {sortedCourses.length > 0 ? (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {sortedCourses.map(course => (
                  <div key={course.code} className="p-4 border border-green-200 rounded-lg bg-green-50">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="font-semibold text-lg text-gray-800">{course.code}</div>
                        <div className="text-gray-600 mb-1">{course.title}</div>
                        <div className="text-sm text-blue-600 font-medium">{course.program}</div>
                        <div className="text-sm text-gray-700 mt-2 font-medium">
                          {dayNames[course.day]} at {timeSlots[course.slot]}
                        </div>
                      </div>
                      <button
                        onClick={() => removeCourse(course.code)}
                        className="ml-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-500 text-lg">No courses added yet</div>
                <div className="text-gray-400 text-sm mt-2">Search and add courses to build your exam schedule</div>
              </div>
            )}
          </div>
        </div>

        {/* Conflict Popup */}
        {showConflict && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-2 mr-3">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.498 0L3.316 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-red-600">Conflict Detected!</h3>
              </div>
              <p className="text-gray-700 mb-6">{conflictMessage}</p>
              <div className="flex justify-end">
                <button
                  onClick={closeConflictPopup}
                  className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Understood
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamRoutineApp;