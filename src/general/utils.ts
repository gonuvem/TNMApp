export const formatDate = (data: string) => {
  return `${new Date(data).getDate()}/${new Date(data).getMonth()}/${new Date(
    data,
  ).getFullYear()}`;
};
