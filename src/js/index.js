// BMI Calculator 
//function for calculating BMI Result
function send() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    //Validation check
    if(weight == '' && height == ''){alert("Please fill up all the data to find your BMI.");}
    else{ 
        height = height*12; //convert height into inch 
        height = height*0.025; // convert into meter
        let bmi = weight/(height*height);
        bmi = Math.round(bmi);
        document.getElementById("bmi_value").value = bmi + " kg per square meter";
    }

}

//function for cleaning the previous data 
function clean(){
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("bmi_value").value = "";
}
