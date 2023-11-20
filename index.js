import './index.css'

const element = (
  <div className='container'>
    <h1 className='heading'>Super Over League</h1>
    <div className='images'>
      <img
        className='image'
        src='https://assets.ccbp.in/frontend/react-js/rcb-img.png'
      />
      <img
        className='image'
        src='https://assets.ccbp.in/frontend/react-js/csk-img.png'
      />
    </div>
  </div>
  //   Write your code here.
)
ReactDOM.render(element, document.getElementById('root'))
