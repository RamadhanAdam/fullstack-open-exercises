import {Courses} from './Course.jsx'

const Total = ({totalprops}) => {
  const total = totalprops.reduce((sum,currentVal) => sum +=currentVal.exercises ,0)
  return <p><b>Total number of exercises is {total} </b></p>
}

const Header = ( props ) => {
  return <h1>{props.name}</h1>
}

const Part = (props) => {
  return (
      <p>{props.parts.name} {props.parts.exercises}</p>
  );
};

const Content = (props) => {
  return (   
    props.partsprops1.map((element) => <Part key ={element.id} parts= {element} />)
  );
};


const App = () => {
  const courses = Courses()

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Header name={courses[0].name} />
      <Content partsprops1={courses[0].parts} />
      <Total totalprops={courses[0].parts} />
      <Header name={courses[1].name} />
      <Content partsprops1={courses[1].parts} />
      <Total totalprops={courses[1].parts} />
    </div>
  )
}

export default App;