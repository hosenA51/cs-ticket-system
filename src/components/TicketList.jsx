import React from 'react';
import TicketCard from './TicketCard';

const TicketList = ({tickets, onAdd}) => {
    return (
        <div>
            <h2 className="text-lg font-semibold mb-6">Customer Tickets</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tickets.map(ticket => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            onAdd={onAdd}
          />
        ))}
      </div>
        </div>
    );
};

export default TicketList;