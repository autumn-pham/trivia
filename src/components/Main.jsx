import React from "react";
import { questions } from './Questions';

class Main extends React.Component {
  state = {
    questions: questions,
    index: 0,
    score: 0,
    defaultClass: 'answer-button__default',
    disabled: false,
    correct: '',
    incorrect: '',
    finish: false
  };

  nextQuestion() {
    let i = this.state.index
    if ( i < this.state.questions.length - 1) {
      i++
    }this.setState({
     index: i,
     disabled: false,
     defaultClass: this.state.defaultClass,
     correct: '',
     incorrect: ''
    })
  }

  finish() {
    this.setState({
      finish: true
    })
  }

  checkAnswer(q) {
   let currentAnswer = this.state.questions[this.state.index].answer
   let score = this.state.score
   if (q.target.innerText === currentAnswer) {
    score++
    this.setState({
      score: score,
      disabled: true,
      correct: 'answer-button__correct',
      defaultClass: ''
    })
    }else {
     this.setState({
         incorrect: 'answer-button__incorrect',
         defaultClass: '',
         disabled: true,
         score: score,
         correct: 'answer-button__correct'
     })
   }
  }

  nextButton() {
    if (this.state.index < this.state.questions.length - 1) {
      return <button className="next-button" onClick={ event => this.nextQuestion()} >NEXT</button>
    }else{
      return <button onClick={ event => this.finish()} className="next-button">FINISH</button>
    }
  }

  render() {
    const {questions, index, correct, incorrect, finish, score } = this.state
    const currentQuestion = questions[index]
    if (finish === false) {
      return (
        <div>
          <hr/>
          <h3 className="question-text">{currentQuestion.question}</h3>
          <hr/>
          <div className="answers-button">
            {
              currentQuestion.answerOptions.map((q, i) => (
               <button disabled={this.state.disabled} ref="btn" key={i} id={"answer"+i} className={`${ q ===  currentQuestion.answer ? correct : incorrect } answer-button__default`}onClick={ (event) => this.checkAnswer(event)}>
                 {q}
              </button>
             ))
             }
          </div>
           {this.nextButton()}
        </div>
      )
    } else {
      return (
        <div>Your score is {score}</div>
      )
    }
  }
}

export default Main;
