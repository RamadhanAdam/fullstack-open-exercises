const Header = (props) =>{
  return props.course;

}

const Content = (props) => {
  return (
    <div>
     <p>{props.part1} {props.exercises1}</p>
     <p>{props.part2} {props.exercises2}</p>
     <p>{props.part3} {props.exercises3}</p>
    </div>
  );
};

const Total = (props) => {
  const total = props.exercises1 + props.exercises2 + props.exercises3
  return <p>Number of exercises {total} </p>
}
const App = () =>{
  const course = 'Half Stack application development'
  const content = {part1 : 'Fundamentals of React',
    part2 :'Using props to pass data',
    part3 : 'State of a component'
  }

  const exercises1 = 10
  const exercises2 = 7 
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content 
      part1 = {content.part1}
      part2 = {content.part2}
      part3 = {content.part3}
      exercises1 = {exercises1}
      exercises2 = {exercises2}
      exercises3 = {exercises3}
      />
      <Total      
       exercises1 = {exercises1}
      exercises2 = {exercises2}
      exercises3 = {exercises3}/>
    </div>
  )
}

export default App;

