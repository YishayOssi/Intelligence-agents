import { question } from "readline-sync";
import { FetchUsers, FetchCallLogs } from "../services/api.js";
import { SaveUCallLogs, SaveUsers } from "../services/File-writing-service.js";
import { ReadUsers, ReadTranscripts } from "../services/File-reading-service.js";
import { UserSearchByName, UserSearchByAge } from "./User-search.js";
import { DangerousWordSearch } from "./Dangerous-word-search.js";



export async function Menu() {
  let bool = true;
  let choice;
  while (bool) {
    console.log();
    choice = question(
      `Please choose what you would like to do:
1. Get a list of people
2. Get a list of calls/transcripts
3. Search for a person by name
4. Search for a person by name
5. Search for dangerous people
6. exit
`
    );
    if (choice == 6) {
      bool = false;
    }

    if (choice == 1) {
      let data = await FetchUsers();
      let Push_to_file = await SaveUsers(data);
      if (Push_to_file) {
        console.log("The user list was saved successfully...");
      }
    }

    if (choice == 2) {
      let data = await FetchCallLogs();
      let Push_to_file = await SaveUCallLogs(data);
      if (Push_to_file) {
        console.log("Call logs saved successfully...");
      }
    }



    if (choice == 3) {
      let list_of_users = await ReadUsers();
      let name = question("give me name: ");
      UserSearchByName(name, list_of_users)
    }



    if(choice == 4){
      let list_of_users = await ReadUsers() 
       let age = question("give me age: ");
      UserSearchByAge(age, list_of_users)
    }


    if(choice == 5){
       let list_of_Transcripts = await ReadTranscripts() 
       let Call_summary_list = DangerousWordSearch(list_of_Transcripts)
       console.log(Call_summary_list);
       
    }





  }
}
