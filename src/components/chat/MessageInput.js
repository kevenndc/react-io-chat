import React from 'react'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

export default class MessageInput extends React.Component {
  constructor() {
    super()
    this.state = {
      message : '',
      showEmojis : false
    }

    let $message_area
    let $message_input

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleEmojis = this.toggleEmojis.bind(this)
    this.addEmoji = this.addEmoji.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  componentDidMount() {
    this.$message_area = document.querySelector('.message-area')
    this.$message_input = document.querySelector('.message-input')
  }

  handleChange(e) {
    if(this.state.message === '' && e.target.value === ' ') return
    this.setState({
      message : e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.message === '') return
    this.props.onSubmit(this.state.message)
    this.setState({
      message: ''
    })
  }

  toggleEmojis() {
    this.setState({
      showEmojis : !this.state.showEmojis
    },() => {
      this.$message_area.addEventListener('click', this.closeMenu)
      this.$message_input.focus()
    })
  }

  addEmoji(e) {
    this.$message_input.focus()
    const emoji = e.native
    this.setState({
      message : this.state.message + emoji
    })
  }

  closeMenu(e) {
    this.setState({
        showEmojis: false
    }, () => {
      this.$message_area.removeEventListener('click', this.closeMenu)
      this.$message_input.focus()
    })
  }

  render() {
    return (
      <div className="message-input-wrapper">
        <div className="emoji-picker">
            {this.state.showEmojis && 
            (
              <Picker 
                set='google'
                darkMode={true}
                onSelect={this.addEmoji}
              />
            )}
        </div>
        <form className="message-form" onSubmit={this.handleSubmit}>
          <div className="emoji-btn">
              <p  onClick={this.toggleEmojis}>🙂</p>
          </div>
          <input 
            type="text" 
            className="message-input" 
            value={this.state.message} 
            onChange={this.handleChange} 
          />
        </form>
      </div>
      
    )
  }
} 