export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const hour = date.getUTCHours().toString().padStart(2, "0");
  const minute = date.getUTCMinutes().toString().padStart(2, "0");
  const second = date.getUTCSeconds().toString().padStart(2, "0");
  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const year = date.getUTCFullYear().toString().substr(-2);

  const formattedDate = `${hour}:${minute}:${second} ${day}/${month}/${year}`;
  return formattedDate;
};
