const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    let { parts } = props
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
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }

    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }

    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return (
        <div>
            <Header course={course} />

            <Content parts={[part1, part2, part3]} />

            <Total parts={[part1, part2, part3]} />
        </div>
    )

}

export default App