import { useState } from 'react'

const Button = ({ callback, text }) => {
    return (
        <button onClick={callback} >
            {text}
        </button>
    )
}

const Statistics = ({ good, neutral, bad }) => {
    const average = (good - bad) / (good + neutral + bad)
    const positive = ((good) / (good + neutral + bad)) * 100
    if ((good + neutral + bad) === 0) {
        return (
            <div>
                <h1>statistics</h1>
                No feedback given
            </div>

        )
    }
    return (
        <div>
            <h1>statistics</h1>
            <div>
                <StatisticsLine text="good" value={good} />
                <StatisticsLine text="neutral" value={neutral} />
                <StatisticsLine text="bad" value={bad} />
                <StatisticsLine text="average" value={average} />
                <StatisticsLine text="positive" value={positive} />
            </div>
        </div>

    )
}

const StatisticsLine = ({text, value}) => {
    return (<div>{text} {value}</div>)
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const goodReview = () => () => {
        setGood(good + 1)
    }

    const neutralReview = () => () => {
        setNeutral(neutral + 1)
    }

    const badReview = () => () => {
        setBad(bad + 1)
    }
    return (
        <div>
            <h1>give feedback</h1>
            <Button callback={goodReview()} text='good'></Button>
            <Button callback={neutralReview()} text='neutral'></Button>
            <Button callback={badReview()} text='bad'></Button>
            <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
        </div>
    )
}

export default App