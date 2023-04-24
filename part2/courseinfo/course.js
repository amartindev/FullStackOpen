
const Course = ({ course }) => {
    return (
        <div>
            <Header name = {course.name} />
            <Content parts = {course.parts} />
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

export default Course;