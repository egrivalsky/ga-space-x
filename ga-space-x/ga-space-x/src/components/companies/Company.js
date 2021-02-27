
const Company = (props) => {
    const { student, ceo, employees, name, valuation, vehicles } = props.company;
    return(
        <div>
            <p>Student: {student}</p>
            <p>CEO: {ceo}</p>
            <p>Employees: {employees}</p>
            <p>Name: {name}</p>
            <p>Evaluation: {valuation}</p>
            <p>Vehicles: {vehicles}</p>
        </div>
    )
    
}

export default Company;