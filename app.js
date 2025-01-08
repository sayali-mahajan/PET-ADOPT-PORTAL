const search = () =>{
    const searchbox = document.getElementById("search-items").value.toUpperCase();
    const storeitems = document.getElementById("shelterlist")
    const shelter = document.querySelectorAll(".shelter")
    const sname = storeitems.getElementsByTagName("h4")

    for(let i=0; i< sname.length; i++){
        let match = shelter[i].getElementsByTagName("h4")[0];
        if(match){
            let textvalue = match.textContent || match.innerHTML
            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                shelter[i].style.display = "";
            }else{
                shelter[i].style.display = "none";
            }
        }
    }
}