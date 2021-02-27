import './Company.css';

const Company = (props) => {
    const { student, ceo, employees, name, valuation, vehicles } = props.company;
    return(
        <div className="company">
          <ul>  
            <li>Student: {student}</li>
            <li>CEO: {ceo}</li>
            <li>Employees: {employees}</li>
            <li>Name: {name}</li>
            <li>Evaluation: {valuation}</li>
            <li>Vehicles: {vehicles}</li>
          </ul>
        </div>
    )
    
}

export default Company;