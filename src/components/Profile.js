function Profile(avatar, username, bio) {
    console.log("entra al componente");
    return (
        <>
            <div className="card" style={{ width: "18rem;" }}>
                <img src={avatar} className="card-img-top" alt="Imagen no disponible" />
                <div className="card-body">
                    <h5 className="card-title">{username}</h5>
                    <p className="card-text">{bio}</p>
                </div>
            </div>
        </>
    );

}

export default Profile;