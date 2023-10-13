// Submit event listener
document.querySelector('#loan-form').addEventListener('submit', function(e){
    // Hide the results
    document.querySelector('#results').style.display = 'none';
    // Show the loading animation
    document.querySelector('#loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

// Calculate the results
function calculateResults(){
    // Declare UI variables
    const amount = document.getElementById('amount');
    // const interest = document.getElementById('interest');
    const interest = 1;
    const years1 = document.getElementById('years');
    const monthlyPayment = 1;
    const totalPayment = 1;
    const totalInterest = document.getElementById('total-interest');

    const givinTxt = document.getElementById('giving');
    const savingsTxt = document.getElementById('savings');
    const selfTxt = document.getElementById('self');

    const InvestmentTxt = document.getElementById('investments');
    const LoanTxt = document.getElementById('loan');
    const DependentsTxt = document.getElementById('dependents');

    const DayTxt = document.getElementById('day');

    const MobilityTxt = document.getElementById('mobility');
    const ProtectionTxt = document.getElementById('protection');
    const OtherTxt = document.getElementById('other');


    const years = years1.value

    const principle = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest) / 100 / 12;
    const calculatedPayments = parseFloat(years) * 12;
    
    // Calculate monthly payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principle * x * calculatedInterest) / (x - 1);
        let Giving = 0	
        let Savings = 0 
        let Self 	= 0
        let Investments = 0 
        let Loan 	= 0
        let Dependents = 0
        let Day 	= 0
        let Mobility  = 0
        let Protection = 0
        let Other 	= 0
        if(years>18&&years<25){
            Giving = 11
            Savings = 5
            Self 	= 4
            Investments = 10
            Loan 	= 5 
            Dependents = 10
            Day 	= 45 
            Mobility  = 5 
            Protection = 4 
            Other 	= 1 
        }else if(years>=25&&years<35){
            Giving = 11
            Savings = 5 
            Self 	= 4 
            Investments = 10 
            Loan 	= 8 
            Dependents = 12 
            Day 	= 40 
            Mobility  = 5 
            Protection = 4 
            Other 	= 1 
        }else if(years>=35&&years<40){
            Giving =11 
            Savings = 5 
            Self 	= 4 
            Investments = 10 
            Loan 	=10 
            Dependents = 20 
            Day 	= 30 
            Mobility  = 5 
            Protection =4 
            Other 	= 1 
        }else if(years>=40&&years<45){
            Giving =11 	
            Savings = 5 
            Self 	= 4 
            Investments = 15 
            Loan 	=10 
            Dependents = 20 
            Day 	= 25 
            Mobility  = 4 
            Protection = 5 
            Other 	=  1 
        } else if(years>=45&&years<=50){
            Giving =11
            Savings =5
            Self 	= 4 
            Investments =15
            Loan 	= 10
            Dependents =  25 
            Day 	=  20 
            Mobility  = 4 
            Protection = 5 
            Other 	=   1 
        }
        else if(years>50){
            Giving = 	11
            Savings =	5
            Self 	= 4
            Investments =25
            Loan 	= 5
            Dependents =  25
            Day 	= 15
            Mobility  =4
            Protection = 5
            Other 	=  1
        }else{

        }
            
            


    if(isFinite(monthly)){

        givinTxt.value = (principle*Giving*0.01).toLocaleString('en-US')
        savingsTxt.value = (principle*Savings*0.01).toLocaleString('en-US')
        selfTxt.value = (principle*Self*0.01).toLocaleString('en-US')
    
        InvestmentTxt.value = (principle*Investments*0.01).toLocaleString('en-US')
        LoanTxt.value = (principle*Loan*0.01).toLocaleString('en-US')
        DependentsTxt.value = (principle*Dependents*0.01).toLocaleString('en-US')
    
        DayTxt.value = (principle*Day*0.01).toLocaleString('en-US')
    
        MobilityTxt.value = (principle*Mobility*0.01).toLocaleString('en-US')
        ProtectionTxt.value = (principle*Protection*0.01).toLocaleString('en-US')
        OtherTxt.value = (principle*Other*0.01).toLocaleString('en-US')

        // monthlyPayment = 1;
        // totalPayment  = 1;
        // totalInterest =1;

        // Show results and hide the loader
        document.querySelector('#results').style.display = 'block';
        document.querySelector('#loading').style.display = 'none';
    } else {
        // Show an error message
        showError('Please check your inputs');
    }
}
function commify(n) {
    var parts = n.toString().split(".");
    const numberPart = parts[0];
    const decimalPart = parts[1];
    const thousands = /\B(?=(\d{3})+(?!\d))/g;
    return numberPart.replace(thousands, ",") + (decimalPart ? "." + decimalPart : "");
}
// Show error on invalid input
function showError(error){
    // Hide the results and loader
    document.querySelector('#results').style.display = 'none';
    document.querySelector('#loading').style.display = 'none';

    // Create a div for the error message
    const errorDiv = document.createElement('div');

    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Add a class to the error message div
    errorDiv.className = 'alert alert-danger';
    
    // Create a text nod and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert the error message above the heading
    card.insertBefore(errorDiv, heading);

    // Clear error message after 3 seconds
    setTimeout(clearError, 4000);
}

// Clear the error message
function clearError(){
    document.querySelector('.alert').remove();
}