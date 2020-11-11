import React from 'react'
import './App.css'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			// Add magic 8 ball outcomes to the array
			answerArray: [
				'Not Likely',
				'Looks Favorable',
				'As I see it, yes.',
				'Ask again later',
				'Cannot predict now',
			],
			question: '',
		}
	}

	getAnswer = () => {
		// destructures answerArray out of state
		const { answerArray } = this.state
		// write your code here!
		// Update the return statement below to reflect the outcome of your code.
		return this.state.answerArray[
			Math.floor(Math.random() * answerArray.length)
		]
	}

	handleChange = (e) => {
		// gets the event from the input on change and updates state
		this.setState({ question: e.target.value })
	}

	handleSubmit = () => {
		// destructures question out of state
		const { question } = this.state
		// calls the getAnswer function and saves the outcome as answer
		const answer = this.getAnswer()
		this.setState({ answer: answer })
	}

	render() {
		return (
			<div>
				<h1>Magic 8 Ball</h1>
				<div className='eight-ball'> <span>8</span> </div>
					<input id='inputBox' type='text' onChange={this.handleChange} />
					<br />
					<button onClick={this.handleSubmit}>
						Ask the Magic 8 Ball a Question
					</button>
					<p> {this.state.answer} </p>
				
			</div>
		)
	}
}

export default App
