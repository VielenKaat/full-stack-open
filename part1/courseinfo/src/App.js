const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    let { parts, exercises } = props
    return (
        <>
            <Part part={parts[0]} exercise={exercises[0]} />
            <Part part={parts[1]} exercise={exercises[1]} />
            <Part part={parts[2]} exercise={exercises[2]} />
        </>
    )
}

const Total = (props) => {
    let total = 0
    props.exercises.forEach(element => total += element)

    return (
        <p>Number of exercises {total}</p>
    )
}

const Part = (props) => {
    return (
        <p>{props.part} {props.exercise}</p>
    )
}
const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of component'
    const exercises3 = 14

    return (
        <div>
            <Header course={course} />

            <Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} />

            <Total exercises={[exercises1, exercises2, exercises3]} />
        </div>
    )

}

export default App