import {
  useState,
  useCallback,
  useMemo,
  createContext
} from "react";
import useLocalStorageHook from "../hooks/useLocalStorageHook";
import data from "./data";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [todoList, setTodoList] = useLocalStorageHook("TaskKey", data);
  const [filter, setFilter] = useState("all");
  const [validation, setValidation] = useState("");


  const newTodoList = useMemo(() => {
    switch (filter) {
      case "active":
        return todoList.filter((item) => !item.completed);
      case "completed":
        return todoList.filter((item) => item.completed);
      default:
        return todoList;
    }
  }, [filter, todoList]);


  const todoLeft = useMemo(
    () => todoList.filter((item) => !item.completed).length,
    [todoList]
  );


  const onCreateTodo = useCallback(
    (todoValue) => {
      const nextId =
        todoList.reduce(
          (max, item) => (Number(item.id) > max ? Number(item.id) : max),
          0
        ) + 1;

      setTodoList([...todoList, { id: nextId, completed: false, task: todoValue }]);
      setFilter("all");
    },
    [todoList, setTodoList]
  );


  const onTodoStatusChange = useCallback(
    (todoId) => {
      setTodoList((prev) =>
        prev.map((item) =>
          item.id === todoId
            ? { ...item, completed: !item.completed }
            : item
        )
      );
    },
    [setTodoList]
  );

  const onRemoveTodo = useCallback(
    (todoId) => {
      setTodoList((prev) => prev.filter((item) => item.id !== todoId));
    },
    [setTodoList]
  );

  
  const onClearCompleted = useCallback(() => {
    setTodoList((prev) => prev.filter((item) => !item.completed));
    setFilter("all");
  }, [setTodoList]);

 
  const handelOnDragEnd = useCallback(
    (result) => {
      if (!result.destination) return;

      const items = Array.from(newTodoList);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);

     
      if (filter === "all") {
        setTodoList(items);
      }
    },
    [newTodoList, filter, setTodoList]
  );

 
  const contextValue = useMemo(
    () => ({
      newTodoList,
      todoLeft,
      filter,
      validation,

      onCreateTodo,
      onTodoStatusChange,
      onRemoveTodo,
      onClearCompleted,
      setFilter,
      setValidation,
      handelOnDragEnd
    }),
    [
      newTodoList,
      todoLeft,
      filter,
      validation,
      onCreateTodo,
      onTodoStatusChange,
      onRemoveTodo,
      onClearCompleted,
      handelOnDragEnd
    ]
  );

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
