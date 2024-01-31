export const fetchDestinations = async () => {
  const res = await fetch("/api/destinations");
  const data = await res.json();
  return data.data;
};

export const fetchDestination = async (destinationId: number) => {
  const res = await fetch(`/api/destinations/${destinationId}`);
  const data = await res.json();
  if (data.error) throw new Error(data.error.message);

  return data.data;
};

export const deleteDestination = async (destinationId: number) => {
  const res = await fetch(`/api/destinations/${destinationId}`, {
    method: "DELETE",
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error.message);

  return data.data;
};
