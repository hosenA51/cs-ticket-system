import React from 'react';
import { CiCalendar } from 'react-icons/ci';
import { FaCircle } from 'react-icons/fa';

const TicketCard = ({ ticket, onAdd }) => {

    const priorityColor = {
        "HIGH PRIORITY": "text-red-500",
        "MEDIUM PRIORITY": "text-yellow-500",
        "LOW PRIORITY": "text-green-500"
    };

    const statusStyle = {
        "Open": "bg-green-100 text-green-600",
        "In-Progress": "bg-yellow-100 text-yellow-600"
    };

    return (
        <div
            onClick={() => onAdd(ticket)}
            className="bg-white p-5 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition">

            <div className="flex justify-between items-center">
                <h3 className="font-semibold">{ticket.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm flex gap-2 items-center ${statusStyle[ticket.status]}`}>
                    <FaCircle /> {ticket.status}
                </span>
            </div>

            <p className="text-gray-500 mt-3 text-sm">
                {ticket.description}
            </p>

            <div className="flex justify-between mt-5 text-sm text-gray-500">
                <span className='flex gap-3'>
                    <span>#{ticket.id}</span>
                    <span className={priorityColor[ticket.priority]}>
                        {ticket.priority}
                    </span>
                </span>
                <span className='flex gap-3'>
                    <span>{ticket.customer}</span>
                    <span className='flex items-center gap-2'><span className='text-xl'><CiCalendar /></span>{ticket.createdAt}</span>
                </span>
            </div>
        </div>
    );
};

export default TicketCard;