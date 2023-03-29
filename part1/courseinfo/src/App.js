const App = () => {

    const course = {
        name: 'Half Stack application development',
        parts: [
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
      <Content parts={course}/>
      <Total exercises={course}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
    return (
      <div>
        {props.parts.parts.map((part) => (
          <p> {part.name}: {part.exercises} </p>
        ))}
      </div>
    );
  };

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises.parts.map(part => part.exercises).reduce((sum, value) => sum + value, 0)}</p>
  )
}

export default App