const apiURL = import.meta.env.VITE_BASE_API_URL;

export const createConversation = async (userId) => {
  try {
    const res = await fetch(`${apiURL}/api/conversations/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //SEND USER ID TO FIND THE RIGHT CONVERSION
      body: JSON.stringify({ userId }),
      credentials: "include",
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};
