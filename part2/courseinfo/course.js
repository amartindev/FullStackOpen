
const Course = ({ course }) => {
  return (
      <div>
          <Header name = {course.name} />
          <Content parts = {course.parts} />
          <Total parts = {course.parts} />
      </div>
  )
};

const Header = ({name}) => {
    return <h1>{name}</h1>
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