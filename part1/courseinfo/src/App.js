const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    let { parts } = props
    console.log(parts)
    console.log(parts[0])
    return (
        <>
            <Part part={parts[0]} />
            <Part part={parts[1]} />
            <Part part={parts[2]} />
        </>
    )
}

const Total = (props) => {
    let { parts } = props
    let total = 0
    parts.forEach(item => total += item.exercises)

    return (
        <p>Number of exercises {total}</p>
    )
}

const Part = (props) => {
    let { name, exercises } = props.part
    return (
        <p>{name} {exercises}</p>
    )
}
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
            <Header course={course.name} />

            <Content parts={course.parts} />

            <Total parts={course.parts} />
        </div>
    )

}

export default App