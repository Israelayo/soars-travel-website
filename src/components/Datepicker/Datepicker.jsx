import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import "./DatePicker.css"
import { useState } from "react"

function MyDatepicker(){
    const [selectedDate, setSelectedDate] = useState(null);

    return <div>
        <DatePicker 
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        placeholderText="dd/mm/yy"
        dateFormat="dd/MM/yyyy"/>
    </div>
}

export default MyDatepicker

