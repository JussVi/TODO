import EmployersListItem from "../employers-list-item/employers-list-list";

import './employers-list.css'

const EmployersList = ({data}) => {

    const elements = data.map(item => {
        return (
            // <EmployersListItem name={item.name} salary={item.salary}/>
            <EmployersListItem {...item}/>
        )
    })

    console.log(elements)

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;