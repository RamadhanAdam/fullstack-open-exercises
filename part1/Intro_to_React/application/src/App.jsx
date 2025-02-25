const Header = ({course}) =>{
  return <h1>{course.name}</h1>
}

const Content = ({course}) => {
  return (
    <div> 
     <p>{course.course[0].name}  {course.course[0].exercises}</p>
     <p>{course.course[1].name}  {course.course[1].exercises}</p>
     <p>{course.course[2].name} {course.course[2].exercises}</p>
    </div>
  );
};

const Total = ({course}) => {
  const total = course.course[0].exercises + course.course[1].exercises + course.course[2].exercises 
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
        name: 'Using course to pass data',
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