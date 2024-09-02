let messages = ``
                
for(let i=messages_json.length-1; i>-1; --i){
  messages_data = messages_json[i];
  let author = messages_data["author"];
  let fof = "friend";
  if(messages_data["author"]=="user"){
    author = "You";
    fof = "user";
  }
  messages += `
    <article class="chat-bubble ${fof}">
      <p style="color: blue; text-align: left;">${author}</p>
      <p> ${messages_data["content"]} </p>
      <p style="color: black; text-align: right;">${messages_data["date"]}</p>
    </article>
  `;
}
$("#screen").html(messages);