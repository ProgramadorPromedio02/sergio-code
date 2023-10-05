import { useFetchData } from "./hooks/useFetchData";

export const UserList = ({ endPoint }) => {
  const { data, isLoading } = useFetchData({ endPoint });
  return (
    <>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {isLoading ? (
            <p>Cargando...</p>
          ) : endPoint === "users" && data ? (
            data.map((item) => <li key={item.id}>{item.name}</li>)
          ) : endPoint === "comments" && data ? (
            data.map((item) => <li key={item.id}>{item.body}</li>)
          ) : null}{" "}
          {/* Agregado null para manejar otros casos */}
        </ul>
      )}
    </>
  );
};
