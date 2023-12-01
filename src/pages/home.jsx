const Home = () =>{
    return (
        <>
            <h1>Welcome to Gestion Pharma</h1>
            <img src="data:image/png;base64,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" alt="" className="photo"/>
        </>
    )
}

export default Home