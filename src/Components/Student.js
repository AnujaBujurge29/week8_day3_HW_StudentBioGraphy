import Score from "./Score";

export default function Student(nameBio){

// const displayNames = studentData.students.map((data)=>{

const desplayScore = nameBio.data.scores.map((scoreData)=>{
  return (
    <Score date={scoreData.date} score={scoreData.score}></Score>
  )
})

  return(
   
      <div key={nameBio.data.name} className="card">
        <h3><b>Name: </b>{nameBio.data.name}</h3><br/>
        <p><b>Biography: </b>{nameBio.data.bio}</p>
        {desplayScore}
      </div>
  )
}