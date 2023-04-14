import "./App.css";
import Student from "./Components/Student";
import Score from "./Components/Score";
import { useState } from "react";

function App() {
  const students = [
    {
      name: "Mary Jones ",
      bio: "Mary Jones is an Administrative Assistant with eight years of experience working alongside the executive team of a Fortune 500 company. Mary specializes in administrative technology and is responsible for educating other employees on using progressive systems and applications, including accounting software, mass communication procedures and organizational apps",
      scores: [
        { date: "2018-02-08", score: 77 },
        { date: "2018-04-22", score: 92 },
        { date: "2018-09-15", score: 68 },
      ],
    },
    {
      name: "Alex Drysdale",
      bio: "My name is Alex Drysdale and I am a Junior Web Developer for Oswald Technologies. I am an accomplished coder and programmer, and I enjoy using my skills to contribute to the exciting technological advances that happen every day at Oswald Tech.",
      scores: [
        { date: "2018-12-14", score: 88 },
        { date: "2019-06-21", score: 79 },
        { date: "2019-05-19", score: 69 },
      ],
    },
    {
      name: "Jaime Jones",
      bio: "Jaime Jones is an award-winning freelance writer who specializes in finance topics. With over ten years of experience, she has been published in the Wall Street Journal, the New York Times and numerous trade journals, including the Harvard Business Review.",
      scores: [
        { date: "2018-05-14", score: 71 },
        { date: "2018-06-17", score: 75 },
        { date: "2019-07-29", score: 82 },
      ],
    },
  ];

  const [studentData, setStudentData] = useState({ students });

  // const displayName = studentData.students.map((nameBio, key) => {
  //   return (<Student data={nameBio}></Student>);
  // });

  return (
    <div className="App">
      {studentData.students.map((nameBio, key)=>{
        return (
          <Student key={key} data={nameBio}></Student>
        )
      })}
    </div>
  );
}

export default App;
