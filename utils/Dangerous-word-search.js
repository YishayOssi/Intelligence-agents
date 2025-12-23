export function DangerousWordSearch(list_of_Transcripts){
    let listi = []
    for (let i = 0; i < list_of_Transcripts.length; i++){
        let content = list_of_Transcripts[i].content
        let parts = content.split(" ")
        let count = 0
        for (let i = 0; i < parts.length; i++){
            if(parts[i].toLocaleLowerCase() === "death" ||
               parts[i].toLocaleLowerCase() === "knife" ||
               parts[i].toLocaleLowerCase() === "bomb" ||
               parts[i].toLocaleLowerCase() === "attack"){
               count ++}}
            let summary = {"age": list_of_Transcripts[i].age, "Dangerous": count} 
            listi.push(summary)
    }
return listi

}


export function Finding3DangerousOnes(list_of_Transcripts){
    let listi = []
    for(let i = 0; i < list_of_Transcripts.length; i++){
        
    }
    
}

