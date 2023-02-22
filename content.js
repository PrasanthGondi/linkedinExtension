chrome.runtime.onMessage.addListener((message)=> {
    var turns = 0
    let count = document.querySelectorAll("button[aria-label~='Invite']").length

    const SetConnection = async() => {
        document.querySelector("button[aria-label~='Invite']").click()
        const time = setTimeout(()=>document.querySelector("button[aria-label='Send now']").click(),700)
        if(turns>=count || message=="stop"){
            clearTimeout(time)
            clearInterval(intv)
            console.log("Interval Stopped - Invitations Found:",count, " Invitations Sent:",turns)
        }
        turns=turns+1
    }

    const intv = setInterval(SetConnection,3000)
  });