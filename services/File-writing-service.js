import fs from "node:fs/promises"


export async function SaveUsers(users){
    try{
    await fs.writeFile("PEOPLE.json", users)
    return true}

    catch (err){
        console.log("User entry failed!")
        return false
    }
}



export async function SaveUCallLogs(CallLogs){
    try{
    await fs.writeFile("TRANSCRIPTIONS.json", CallLogs)
    return true}

    catch (err){
        console.log("Failed to import call logs!")
        return false
    }
}















