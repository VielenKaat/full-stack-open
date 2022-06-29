import React from "react"

const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>


const Content = ({ parts }) => {
  let sum = parts.reduce((sum, part) => {
    return sum + part.exercises
  }, 0)

  const renderParts = parts.map(x => {
    return (
      <Part key={x.id} part={x} />
    )
  })


  return (
    <div>
      {renderParts}
      <Total sum={sum} />
    </div>
  )
}


const Course = ({ course }) => {
  const { name, parts } = course
  return (
    <div>
      <Header course={name} />
      <Content parts={parts} />
    </div>

  )
}

export default Course