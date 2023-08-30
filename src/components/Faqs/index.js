// Write your code here.
import {Component} from 'react'

import Item from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {
    toggle: false,
    txt: 0,
  }

  answer = () => {
    this.setState(prev => ({toggle: !prev.toggle, txt: prev.txt + 1}))
  }

  render() {
    const {toggle, txt} = this.state
    const {faqsList} = this.props
    const {questionText, id} = faqsList
    const img = toggle
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '

    const hit = toggle ? 'xtra' : ''

    return (
      <div className="main">
        <div className="maincard">
          <h1 className="color">FAQs</h1>
          <ul>
            {faqsList.map(each => (
              <div className={`mainlist ${hit}`}>
                <div className="list">
                  <h1>{each.questionText}</h1>
                  <button type="button" className="btn" onClick={this.answer}>
                    <img src={img} alt={toggle ? 'minus' : 'plus'} />
                  </button>
                </div>
                {toggle && <hr />}
                <p>
                  {toggle && <Item details={each.answerText} key={each.id} />}
                </p>
              </div>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
