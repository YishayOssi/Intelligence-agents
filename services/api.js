export async function FetchUsers() {
  try {
    const url = "https://spiestestserver-8l55.onrender.com/people";
    const response = await fetch(url);
    const data = await response.text();
    return data
    
  } catch (err) {
    console.log("Fetch users failed:", err);
  }
}



export async function FetchCallLogs() {
  try {
    const url = "https://spiestestserver-8l55.onrender.com/transcriptions";
    const response = await fetch(url);
    const data = await response.text();
    return data

  } catch (err) {
    console.log("Fetch call logs failed:", err);
  }
}
