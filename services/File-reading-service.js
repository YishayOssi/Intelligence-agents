import fs from "node:fs/promises"


export async function ReadUsers(){
    try{
    const json = await fs.readFile("PEOPLE.json", "utf-8")
    const data = await JSON.parse(json)
    return data}

    catch (err){
        console.log("Reading from file failed!");
    }
}




export async function ReadTranscripts(){
    try{
    const json = await fs.readFile("TRANSCRIPTIONS.json", "utf-8")
    const data = await JSON.parse(json)
    return data}

    catch (err){
        console.log("Reading from file failed!");
    }
}