import React from 'react';

const TaskStatus = ({inProgress, resolved, onComplete}) => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Task Status</h2>

            {inProgress.length === 0 && (
                <p className="text-gray-400">
                    Select a ticket to add to Task Status
                </p>
            )}

            {inProgress.map(ticket => (
                <div key={ticket.id} className="bg-white p-5 rounded-sm shadow-sm mb-3">
                    <p className="text-md font-semibold">{ticket.title}</p>

                    <button
                        onClick={() => onComplete(ticket)}
                        className="mt-2 bg-green-600 text-white px-3 py-2 rounded-sm text-md w-full">
                        Complete
                    </button>
                </div>
            ))}

            <h3 className="text-xl mt-6 font-semibold">Resolved Task</h3>

            {resolved.length === 0 && (
                <p className="text-gray-400 mt-2">
                    No resolved tasks yet.
                </p>
            )}

            {resolved.map(ticket => (
                <div key={ticket.id} className="mt-3 px-3 py-5 text-md font-semibold bg-blue-100 rounded-md shadow-sm text-black">
                    {ticket.title}
                </div>
            ))}

        </div>
    );
};

export default TaskStatus;