import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/home');
    }

    const handleClickAdmin = () =>{
        navigate('/all-product');
    }
    return (
        <>
          <h1>Login Pages</h1>
          <button onClick={handleClick}>Connexion</button>
          <button onClick={handleClickAdmin}>Administrateur</button>
        </>
    );
}
export default Login;