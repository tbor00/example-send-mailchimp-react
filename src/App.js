import Newsletter from "send-suscriptor-mailchimp-react"

const App = () => {

  const todo = {
    formClassName: 'form-class',
    inputEmailClassName:"input-classname",
    inputSubmitClassName: "submit-classname",
    valueSubmit : 'Suscribirme',
    listMailchimp: 'https://frontendschool.us1.list-manage.com/subscribe/post?u=3a7bf9a165f57222b5ab10011&amp;id=52b6b1c244&',
    messageSucces: 'Bien hecho!',
    messageError: 'No se pudo completar',
    messageClassName: "property-class"
  }

  return (
    <div>
      <Newsletter info={todo}/>
    </div>
  )
}

export default App