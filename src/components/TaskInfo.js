import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import TaskFilter from "./TaskFilter";

const TaskInfo = () => {
    const { todoLeft, onClearCompleted } = useContext(DataContext);

    return (
        <div className="todo-info">
            <p className="item-left">
                {`${todoLeft} item left`}
            </p>

            <TaskFilter />
            
            <button className="btn clear-completed"
                onClick={onClearCompleted}
            >
                Clear Completed
            </button>
        </div>
    );
}

export default React.memo(TaskInfo);