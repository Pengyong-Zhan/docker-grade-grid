let form = document.querySelector("form")
form.addEventListener('submit', function(e){
    e.preventDefault()
    var valid = true

    r1 = checkText(scoreForm.fName, 2, 100, $('#fNameError'))
    r2 = checkText(scoreForm.lName, 2, 100, $('#lNameError'))
    r3 = checkText(scoreForm.grade, 1, 50, $('#gradeError'))
    r4 = checkList($('#course'), $('#courseError'))
    r5 = checkList($('#work'), $('#workError'))

    valid = r1 && r2 && r3 && r4 && r5
    if (valid) {
        $(this).unbind('submit').submit()
    }
})

/////////////////////////////////////////////////////////////


function checkText(field, min, max, element) {
    var valid
    if (field.value === '') {
        $(element).text("Should not be null")
        valid = false
    }
    else if (field.value.length < min) {
        $(element).text("Should not less than " + min)
        valid = false
    }
    else if (field.value.length > max) {
        $(element).text("Should not longer than " + max)
        valid = false
    }
    else {
        valid = true
    }
    return valid
}

function checkList(droplist, alertElement) {
    var valid
    if ($(droplist).prop('selectedIndex') <= 0) {
        $(alertElement).text("Please select 1 option")
        valid = false
        console.log(valid)
    }
    else {
        valid = true
    }
    return valid
}

//https://formvalidation.io/guide/examples/can-not-submit-form-after-validation/

////////////////////////////////////////////////////////////////////////////////////////
/*
let form = document.querySelector("form")
form.addEventListener('submit', function(e){
    e.preventDefault()
    var valid = true

    if (scoreForm.fName.value === '') {
        $('#fNameError').text('*Please enter first name*')
        valid = false
    } else if (scoreForm.fName.value.length < 2) {
        $('#fNameError').text('*Please input a name with length no less than 2*')
        valid = false
    } else if (scoreForm.fName.value.length > 200) {
        $('#fNameError').text('*Please input a name with length less than 200*')
        valid = false
    }

    if (scoreForm.lName.value === '') {
        $('#lNameError').text('*Please enter first name*');
        valid = false;
    } else if (scoreForm.lName.value.length < 2) {
        $('#lNameError').text('*Please input a name with length no less than 2*');
        valid = false;
    } else if (scoreForm.lName.value.length > 200) {
        $('#lNameError').text('*Please input a name with length less than 200*');
        valid = false;
    }

    if (scoreForm.grade.value === '') {
        $('#gradeError').text('*Please enter first name*');
        valid = false;
    } else if (scoreForm.grade.value.length < 2) {
        $('#gradeError').text('*Please input a name with length no less than 2*');
        valid = false;
    } else if (scoreForm.grade.value.length > 200) {
        $('#gradeError').text('*Please input a name with length less than 200*');
        valid = false;
    }

    if ($("#course").prop('selectedIndex') <= 0) {
        $("#courseError").text("Please select 1 option")
        valid = false;
    }

    if ($("#work").prop('selectedIndex') <= 0) {
        $("#workError").text("Please select 1 option")
        valid = false;
    }

    if (valid) {
        $(this).unbind('submit').submit()
    }
})

 */