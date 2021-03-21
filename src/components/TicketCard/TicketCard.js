import { ContactSupportOutlined } from '@material-ui/icons';
import React from 'react';

const TicketCard = (props) => {
    console.log(props.property);
    const {from, destination, date, typeOfticket} = props.property;
    console.log(from, destination, date, typeOfticket);
    return (
        <div style={{border: '1px solid grey',
                     borderRadius: '10px', 
                     boxShadow: '3px 3px 7px lightgrey'}}>
            this is ticket card
            {
                // props.ticketDetails.from
            }
        </div>
    );
};

export default TicketCard;