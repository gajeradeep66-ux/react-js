import React from 'react'

const App = () => {

  function inputChanging(value) {
    console.log(value)
  }

  function pageScrolling(elem) {
    if(elem > 0) {
      console.log('Scrolling down')
    }
    else {
      console.log('Scrolling up')
    }
  }

  return (
    <div>
      <button onClick={function() {
        console.log('Button clicked!')
      }}>Click Here!!</button>

      <input onChange={function(elem){
        inputChanging(elem.target.value)
      }}
        type="text" 
        placeholder="Enter text" />

      <br />
      <div onMouseMove={(elem) => {
        console.log(elem.pageX)
      }}
      className="box">
      </div>

      <br />
      <div onWheel={(elem) =>{
        pageScrolling(elem.deltaY)
      }}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>


    </div>
  )
}

export default App