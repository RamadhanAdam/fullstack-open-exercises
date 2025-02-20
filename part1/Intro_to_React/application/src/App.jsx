const Header = (props) =>{
  return <h1>{props.course.name}</h1>

}

const Content = (props) => {
  return (
    <div>
     <p>{props.course.course[0].name} <br></br> Exercises {props.course.course[0].exercises}</p>
     <p>{props.course.course[1].name} <br></br> Exercises {props.course.course[1].exercises}</p>
     <p>{props.course.course[2].name} <br></br> Exercises {props.course.course[2].exercises}</p>
    </div>
  );
};

const Total = (props) => {
  const total = props.course.course[0].exercises + props.course.course[1].exercises + props.course.course[2].exercises 
  return <p>Total number of exercises is {total} </p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    course: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default App;