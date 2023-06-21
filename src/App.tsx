
interface ButtonProps {
  tittle: string;
}

function Button(props: ButtonProps) {
  return (
    <button>
        {props.tittle}
    </button>
  )
}
  


function App(){
  return (
    <div>
      <Button tittle="Button 1"/>
      <Button tittle="Button 2"/>
      <Button tittle="Button 3"/>
      <Button tittle="Button 4"/>
    </div>
  )
}

export default App

