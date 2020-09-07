import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["buttons"]

  initialize() {
    console.group('initialize')
    console.log('target', this.buttonsTarget)
    console.log('selected radio button', this.buttonsTarget.querySelector(":scope input:checked"))
    console.groupEnd()
  }

  connect() {
    console.group('connect')
    console.log('target', this.buttonsTarget)
    console.log('selected radio button', this.buttonsTarget.querySelector(":scope input:checked"))
    console.groupEnd()

    let self = this
    setTimeout(function() {
      console.group('connect with timeout')
      console.log('target', self.buttonsTarget)
      console.log('selected radio button', self.buttonsTarget.querySelector(":scope input:checked"))
      console.groupEnd()
    }, 1)
  }

  loadEvent() {
    console.group('load@window')
    console.log('target', this.buttonsTarget)
    console.log('selected radio button', this.buttonsTarget.querySelector(":scope input:checked"))
    console.groupEnd()
  }
}
