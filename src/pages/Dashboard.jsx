import React, { useEffect, useState } from "react";
const Dashboard = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const datas = JSON.parse(localStorage.getItem("StudentFeedback")) || [];
    setFeedback(datas);
  }, []);
  
  const deleteFeedback = (index) => {
    const updated = [...feedback];
    updated.splice(index, 1);
    setFeedback(updated);
    localStorage.setItem("StudentFeedback", JSON.stringify(updated));
  };

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          📋 Student Feedback Dashboard
        </h1>

        {feedback.length > 0 ? (
          <div className="grid gap-6">
            {feedback.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-6 transition hover:shadow-lg border border-gray-100"
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
                  <div>
                    <p className="text-sm text-gray-500">Student</p>
                    <p className="font-semibold">{item.StudentName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Teacher</p>
                    <p className="font-semibold">{item.TeacherName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Course</p>
                    <p className="font-semibold">{item.Course}</p>
                  </div>
                  <div className="md:col-span-2 lg:col-span-1">
                    <p className="text-sm text-gray-500">Rating</p>
                    <p className="font-semibold">{item.rating} ⭐</p>
                  </div>
                  <div className="md:col-span-2 lg:col-span-3">
                    <p className="text-sm text-gray-500">Feedback</p>
                    <p className="italic">"{item.FeedBack}"</p>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => deleteFeedback(index)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">
            No feedback found. Please add some entries.
          </p>
        )}
      </div>
    </>
  );
};

export default Dashboard;
