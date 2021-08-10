import React, {useState} from 'react';

const Contact = () => {
    const [form,setForm] = useState({
        name:"",
        email:"",
        textMessage:"",
    })
    const [errors,setErrors] = useState({
        nameError:"",
        emailError:"",
        textMessageError:""
    })


    const API =`https://fer-api.coderslab.pl/v1/portfolio/contact`

    let regexp = /[a-zA-Z]+\s+[a-zA-Z]+/g;

  const handleSubmit = (e) =>{
        e.preventDefault();
      console.log(form,errors)
      if (!form.email) {
          // setEmailError("E-mail jest wymagany")

          setErrors({...errors, emailError: "E-mail jest wymagany"})

      } else if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(form.email)) {
          setErrors({...errors, emailError: "E-Mail jest nieprawidłowy"})
      }else setErrors({...errors, emailError:""})
      if (!form.textMessage){
      setErrors({...errors, textMessageError: "Wiadomość nie może być pusta"})
      }else if (form.textMessage.length <120){
          setErrors({...errors,textMessageError:"Wiadomość musi posiadać minimum 120 znaków"})
      }else setErrors({...errors, textMessageError:""})
      if (!form.name){
          setErrors({...errors,nameError:"nazwa nie może być pusta"})
      }else if(regexp.test(form.name)){
          setErrors({...errors, nameError:"Nazwa musi być jednym wyrazem"})
      }else setErrors({...errors, nameError:""})
  }

  const updateField = e =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
  }

    return (
        <div className="contactContainer" id="contact">

            <div className="contactLeftSide">
                {/*<img className="contactLeftSideBackground" src={require("../assets/BackgroundImage.png").default}/>*/}
            </div>
            <div className="contactRightSide">
                <h1>Skontaktuj się z nami</h1>
                <img src={require("../assets//Decoration.svg").default}/>
                   <form>
                    <div className="contactForm">
                        <div className="contactFormLeftSide">
                            <p>Wpisz swoje imię</p>
                            <p>{errors.nameError}</p>
                            <input name="name" onChange={updateField} type="text"/>
                        </div>
                        <div className="contactFormRightSide">
                            <p>Wpisz swój email</p>
                            <p>{errors.emailError}</p>
                            <input name="email" onChange={updateField} type="email"></input>
                        </div>
                    </div>
                <div className="contactTextForm">
                    <p>Wpisz swoją wiadomość</p>
                    <textarea name="textMessage" onChange={updateField} />
                </div>
<div className="SubmitButtonContact">
                       <input onClick={handleSubmit} type="submit"></input>
</div>
                   </form>
            </div>
        </div>
    );
}

export default Contact;