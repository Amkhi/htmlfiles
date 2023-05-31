function akhi(){
    let x=document.getElementById("typ1").value
    let y=document.getElementById("typ2").value
    let z=document.getElementById("typ3").value

    if(x==""&&y==""&&z==""){
        document.write("information not entered")
    }
    else if(x==""){
        document.write("enter name")
    }
    else if(y==""){
        document.write("enter email")
    }
    else if(z==""){
        document.write("enter password")
    }
    
    else{
         alert("information entered")
    }

}
    