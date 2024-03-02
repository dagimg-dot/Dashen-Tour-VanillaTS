export const fetchPackages = async () => {
  const res = await fetch("/api/packages");
  const data = await res.json();
  return data.data;
};

export const fetchPackage = async (packageId: number) => {
  const res = await fetch(`/api/packages/${packageId}`);
  const data = await res.json();
  if (data.error) throw new Error(data.error.message);

  return data.data;
};

export const deletePackage = async (packageId: number) => {
  const res = await fetch(`/api/packages/${packageId}`, {
    method: "DELETE",
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error.message);

  return data.data;
};
