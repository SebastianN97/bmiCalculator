

const  calculateMetricBMI = (weight, height) => {
    let  result
    result = (weight / ((height / 100) * (height / 100))).toFixed(2)
    return  result
}
const  getBMIClassification = (value) => {
	if (value < 18.5){
	return  "Underweight"
    }
    else  if (results > 18.5 && results < 25){
	return  "Healthy"
    }
    else  if(results > 25 && results < 30){
	return  "Overweight"
    }
    else if(results > 30 && results < 35){
    return "Obese"
    }
    else {
    return "Extremely obese"
    }
}
