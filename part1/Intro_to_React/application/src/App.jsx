import { courses } from "./Course"  

const Header = (props) => <h2>{props.course}</h2>

const Content = ({ parts }) => {
  return (
  parts.map(part => <Part key={part.id} part={part} />)
    )
  }

const Part = ({part}) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Total = ({parts}) => {
  const total = parts.reduce((sum, part) =>  sum += part.exercises, 0)
  return (
    <h3>total of exercises {total}</h3>
  )
}

const App = () => {
console.log(courses)
  return (
    <div>
      <h1>Web development Curriculum</h1>
      <Header course={courses[0].name} />
      <Content parts={courses[0].parts} />
      <Total parts= {courses[0].parts}/>
      <Header course={courses[1].name} />
      <Content parts={courses[1].parts} />
      <Total parts= {courses[1].parts}/>
    </div>
  )
}

export default App