import profilePic from './assets/Ellie.jpeg';
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Ellie"></img>
            <h2 className="card-title">Ellie</h2>
            <p className="card-text">Ellie is a dog</p>
        </div>
    );
}
export default Card;