export const getUserIP = async () => {
  try {
    const res = await fetch("https://api.ipify.org?format=json");
    const data = await res.json();
    return data.ip; // user's public IP
  } catch (error) {
    console.error("Could not get user IP", error);
    return "not available";
  }
};
