import React, { useState } from "react";
import { useNavigate } from "react-router";
const Home = () => {
  const [StudentName, sateName] = useState("");
  const [Course, SateCourse] = useState("");
  const [TeacherName, SateTeacheerName] = useState("");
  const [FeedBack, sateFeedback] = useState("");
  const [rating, setRating] = useState("");
  const [data, satedata] = useState([]);
  const [error, sateerror] = useState("");
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    if (!Course || !TeacherName || !FeedBack || !rating || !StudentName) {
      return sateerror("Please fill all fields");
    }
    const dataObj = {
      StudentName: StudentName,
      Course: Course,
      TeacherName: TeacherName,
      FeedBack: FeedBack,
      rating: rating,
    };
    const newArry = [...data, dataObj];
    satedata(newArry);
    sateName("");
    SateCourse("");
    SateTeacheerName("");
    sateFeedback("");
    setRating("");
    localStorage.setItem("StudentFeedback", JSON.stringify(newArry));
    sateerror("Submit successfully");

    setTimeout(() => {
      navigate("/First");
    }, 2000);
  };
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 flex justify-center items-center px-4">
        <form
          onSubmit={Submit}
          className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg space-y-4"
        >
          <h2 className="text-xl font-bold text-center text-indigo-700">
            Student Feedback Form
          </h2>

          <div className="space-y-1">
            <label className="block text-sm text-gray-700">Student Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={StudentName}
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-indigo-500 focus:outline-none"
              onChange={(e) => sateName(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm text-gray-700">
              Subject / Course
            </label>
            <input
              type="text"
              placeholder="e.g. Web Development"
              value={Course}
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-indigo-500 focus:outline-none"
              onChange={(e) => SateCourse(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm text-gray-700">Teacher Name</label>
            <input
              type="text"
              placeholder="Enter teacher's name"
              value={TeacherName}
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-indigo-500 focus:outline-none"
              onChange={(e) => SateTeacheerName(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm text-gray-700">Feedback</label>
            <textarea
              rows="3"
              placeholder="Write your feedback..."
              value={FeedBack}
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm resize-none focus:ring-1 focus:ring-indigo-500 focus:outline-none"
              onChange={(e) => sateFeedback(e.target.value)}
            ></textarea>
          </div>

          <div className="space-y-1">
            <label className="block text-sm text-gray-700">
              Rate Your Teacher
            </label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-indigo-500 focus:outline-none"
            >
              <option value="">Select rating</option>
              <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
              <option value="4">⭐⭐⭐⭐ Very Good</option>
              <option value="3">⭐⭐⭐ Good</option>
              <option value="2">⭐⭐ Fair</option>
              <option value="1">⭐ Poor</option>
            </select>
          </div>
          <p className="text-red-500">{error}</p>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 rounded-md transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;
