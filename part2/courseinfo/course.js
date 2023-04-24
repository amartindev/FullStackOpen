
const Course = ({ course }) => {
    return (
    <div>
        <h1>Web development curriculum</h1>
        {course.map(course => 
            <div key={course.id}>
            <Header name={course.name} />
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
            </div>
        )}
    </div>
    )
  };
  
  <h1>Web development curriculum</h1>
  const Header = ({name}) => {
    console.log("nombre: ", name)
    return <h2>{name}</h2>
  };
  
  const Content = ({parts}) => {
    return (
      <div>
        {parts.map((part) => (
          <p key={part.id}> {part.name}: {part.exercises} </p>
        ))}
      </div>
    );
  };
  
  
  const Total = ({parts}) => {
    return (
      <p style={{fontWeight:'bold'}}>Number of exercises {parts.map(part => part.exercises).reduce((sum, value) => {
        return sum + value;
      }, 0)}</p>
    )
  };
  
  export default Course;