import { useState } from 'react'
import Alert from './Alert'



const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [disable, setDisable] = useState(true)
    const [sM, setSM] = useState(false)
    const manejoInput = (e) => {
        disableButton()
        const nuevoValor = e.target.value
        setEmail(nuevoValor)
    }
    const manejoPassword = (e) => {
        disableButton()
        const nuevoValor = e.target.value
        setPassword(nuevoValor)
    }
    const validarInput = (e) => {
        e.preventDefault()
        if (password !== 'desafiolatam' || email !== "react@desafiolatam.com") {
            setSM(false)
            setError(true)
            render()
           
            return
        }
        else {
            setError(false)
            setSM(true)
            render()
        }

    }
    const disableButton = () => {
        if (email === '' || password === '') {
            setDisable(true)
            return
        }
        else {
            setDisable(false)
        }
    }
    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
      }
    const render = () => {
        setEmail("")
        setPassword("")
        setDisable(true)
        const input = document.querySelector("#inputE");
        input.focus();
        delay(5000).then(() => setSM(false))
        delay(5000).then(() => setError(false))
    }
    return (
        <div>
            <div>
                {error ? <Alert mFail={ <p id='success' className='bg-danger text-light p-3 m-3 fw-bold text-center'>Los datos ingresados no son correctos</p>} /> : null}
                {sM ? <Alert mSuccess={<p id='fail' className='bg-success text-light p-3 m-3 fw-bold text-center'>Los datos ingresados  son correctos</p>} /> : null}
            </div>
            <form className='flex-container' onSubmit={validarInput} >
                <div className="form-group">
                    <h1>Desafio useState</h1>
                    <p className='fs-6 fw-bold'>Usuario : "react@desafiolatam.com" Contraseña: "desafiolatam"</p>
                    <p>Email</p>
                    <input value={email} autoFocus id="inputE" onChange={manejoInput} placeholder='user@example.com' type="text" className='form-control my-3 w-100' name="user-email" />
                    <p>Password</p>
                    <input value={password} type="password" onChange={manejoPassword} className="form-control my-3 w-100" name="Password" />
                    <button disabled={disable} className="btn btn-dark mt-3" type="submit" >Enviar</button>
                </div>
            </form> 
        </div>
    )
}
export default Login
