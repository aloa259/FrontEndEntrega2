function Profile({avatar, username, bio}) {
    console.log("entra al componente profile");
    return (
        <>
            <div className="card" style={{ textAlign:"center"}}>
                <img src={avatar} className="card-img-top img-circle rounded mx-auto d-block" style={{width:"150px"}} alt="Imagen no disponible"/>
                <div className="card-body">
                    <h5 className="card-title">@{username}</h5>
                    <p className="card-text">{bio}</p>
                </div>
            </div>
        </>
    );

}

export default Profile;