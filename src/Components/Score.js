export default function Score(data) {
//   console.log(data);
  // const displayScore =studentData.students.map((data,index)=>{
  //         return(
  //             // console.log(index);
  //             <div key={index} className="scorecard">
  //                 <h4>Date: {data.scores[index].date}</h4>
  //                 {/* <h4>Date: {data.scores[index].date}</h4> */}
  //                 <p>Score: {data.scores[index].score}</p>
  //                 {/* <p>Score: {data.scores[index].score}</p> */}
  //             </div>
  //         )
  //     // })

  // })
  // console.log(displayScore);
  return (
    <div key={data.name} className="scorecard">
      <p><b>Date:</b> {data.date}</p>
      <p><b>Score:</b> {data.score}</p>
    </div>
    // <div>{displayScore}</div>
  );
}
