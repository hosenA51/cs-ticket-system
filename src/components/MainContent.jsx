import React, { use, useState } from 'react';
import Banner from './Banner';
import TicketList from './TicketList';
import TaskStatus from './TaskStatus';
import { toast, ToastContainer } from 'react-toastify';

const MainContent = ({ ticketsPromise }) => {

    const ticketData = use(ticketsPromise)

    const [tickets, setTickets] = useState(ticketData);
    const [inProgress, setInProgress] = useState([]);
    const [resolved, setResolved] = useState([]);

    const handleAddToProgress = (ticket) => {
        const exists = inProgress.find(t => t.id === ticket.id);

        if (exists) {
            toast.error("Already in progress!");
            return;
        }

        setInProgress(prev => [...prev, ticket]);
        toast.success("Added to Task Status!");
    };

    const handleComplete = (ticket) => {

        setInProgress(prev => prev.filter(t => t.id !== ticket.id));
        setResolved(prev => [...prev, ticket]);
        setTickets(prev => prev.filter(t => t.id !== ticket.id));
        toast.success("Ticket marked as resolved!");
    };

    return (
        <div className='text-black'>
            {/* Banner Section */}
            <Banner inProgress={inProgress} resolved={resolved}></Banner>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-10 mt-10">
                <div className="lg:col-span-2">
                    <TicketList tickets={tickets} onAdd={handleAddToProgress}></TicketList>
                </div>

                <TaskStatus
                    inProgress={inProgress}
                    resolved={resolved}
                    onComplete={handleComplete}
                ></TaskStatus>
            </div>
            <ToastContainer />
        </div>
    );
};

export default MainContent;