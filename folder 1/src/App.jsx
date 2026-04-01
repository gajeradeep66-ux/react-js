
const App = () => {
  return (
    <>
      <div id="dad">
        <h1 id="child1">Hello</h1>
        <h2 id="child2">Hello</h2>
      </div>
      <div id="bapuji">
        <p id="child">Hello</p>
      </div>
    </>
  )
}

export const studnt = () =>{
  return (
    <>
      Name:<input type="text" placeholder="Enter name"></input>
      <br></br>
      Enrollment:<input type="number" placeholder="Enter number"></input>
      <br></br>
      Gender:<input type="radio" name="male" value="male">Male</input>
            <input type="radio" name="female" value="female">Female</input>
      <br></br>
      Email:<input type="email" name="mail"></input>
    </>
  )
}

export default App