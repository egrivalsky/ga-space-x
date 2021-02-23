//Functional Component
function Animal(props) {
    return (
        //jsx goes here
        <div>
            <h1>{props.animal}</h1>
            
        </div>
    )
}

//now we have to export it to the App

export default Animal;