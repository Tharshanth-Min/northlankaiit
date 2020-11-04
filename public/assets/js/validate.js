
$( document ).ready( function () {
    $( "#studentForm" ).validate( {
        rules: {
            title: "required",
            firstName: "required",
            lastName: "required",
            courseName: "required",
            address: "required",
            nameCertification: "required",
            dateOfBirth: {
                required: true
            },
            gender: "required",
            nicPassportNo: "required",
            nationality : "required",
            personalNum : {
                required: true,
                number: true,
                minlength:10,
                maxlength:10,
            },
            homeNum : {
                number: true,
                minlength:10,
                maxlength:10,
            },
            officeNum : {
                number: true,
                minlength:10,
                maxlength:10,
            },
            emailAddress: {
                required : true,
                email : true
            },
            ol_year_examination: {
                required: true
            },
            stream_type : "required",
            a_al_year_examination : "required",
            s_al_year_examination : "required",
            c_al_year_examination : "required",
            m_al_year_examination : "required",
            olMath: "required",
            olScience: "required",
            olEnglish: "required",
            scieEnglish: "required",
            comEnglish: "required",
            mathEnglish: "required",
            biology : "required",
            sciePhysics : "required",
            scieChemistry : "required",
            agriculturalScience : "required",
            combinedMathematics : "required",
            mathPhysics : "required",
            mathChemistry : "required",
            comIct : "required",
            mathIct : "required",
            economics : "required",
            accounting : "required",
            businessStudies : "required",

            politic : "required",
            tamil : "required",
            artEnglish : "required",
            artEconomics : "required",
            geographic : "required",
            hindu_culture : "required"
        },
        messages: {
            title: "Please select your title",
            firstName: "Please enter your firstname",
            lastName: "Please enter your lastname",
            courseName: "Please select a course",
            address: "Please enter your address",
            nameCertification: "Please provide a name to certification",
            dateOfBirth : {
                required : "Date of birth is required",
            },
            gender: "Please select your gender",
            nicPassportNo: "Please enter your nic or passport number",
            nationality: "Please select your nationality",
            personalNum: {
                required: "Please provide us your phone number",
                minlength:"Invalid phone number",
                maxlength:"Invalid phone number",
                number : "Please enter a valid phone number"
            },
            homeNum: {
                minlength:"Invalid phone number",
                maxlength:"Invalid phone number",
                number : "Please enter a valid phone number"
            },
            officeNum: {
                minlength:"Invalid phone number",
                maxlength:"Invalid phone number",
                number : "Please enter a valid phone number"
            },
            emailAddress : {
                required : "Please enter your email address",
                email : "Please enter a valid email address"
            },
            ol_year_examination : {
                required : "Date of examination is required",
            },
            olMath: "Please select your grade",
            olScience: "Please select your grade",
            olEnglish: "Please select your grade",
            stream_type: "Please select your stream",
            scieEnglish: "Please select your grade",
            comEnglish: "Please select your grade",
            mathEnglish: "Please select your grade",
            biology : "Please select your grade",
            sciePhysics : "Please select your grade",
            scieChemistry : "Please select your grade",
            agriculturalScience : "Please select your grade",
            combinedMathematics : "Please select your grade",
            mathPhysics : "Please select your grade",
            mathChemistry : "Please select your grade",
            comIct : "Please select your grade",
            mathIct : "Please select your grade",
            economics : "Please select your grade",
            accounting : "Please select your grade",
            businessStudies : "Please select your grade",

            a_al_year_examination : "Date of examination is required",
            s_al_year_examination : "Date of examination is required",
            c_al_year_examination : "Date of examination is required",
            m_al_year_examination : "Date of examination is required",

            politic : "Please select your grade",
            tamil : "Please select your grade",
            artEnglish : "Please select your grade",
            artEconomics : "Please select your grade",
            geographic : "Please select your grade",
            hindu_culture : "Please select your grade"
        },
        errorElement: "em",
        errorPlacement: function ( error, element ) {
            // Add the `invalid-feedback` class to the error element
            error.addClass( "invalid-feedback" );

            if ( element.prop( "type" ) === "checkbox" ) {
                error.insertAfter( element.next( "label" ) );
            } else {
                error.insertAfter( element );
            }
        },
        highlight: function ( element, errorClass, validClass ) {
            $( element ).addClass( "is-invalid" ).removeClass( "is-valid" );
        },
        unhighlight: function (element, errorClass, validClass) {
            $( element ).addClass( "is-valid" ).removeClass( "is-invalid" );
        }
    } );

} );

function showOl() {
    var checkBox = document.getElementById("oLevel");
    var year = document.getElementById('ol_year_examination')
    var english = document.getElementById('ol_english')
    var index_no = document.getElementById('ol_index_no')
    var math = document.getElementById('ol_math')
    var science = document.getElementById('ol_science')

    if (checkBox.checked == true){
        displayBlock(year, english, math, science, index_no);

    } else {
        displayNone(year, english, math, science, index_no);
    }
}

function showAl() {
    var checkBox = document.getElementById("aLevel");
    var stream_type = document.getElementById('al_stream')

    if (checkBox.checked == true){
        displayBlock(stream_type);
    } else {
        document.getElementById("stream_type").value= "";
        displayNone(stream_type);
        displayNoneAll();
    }
}

function streamType() {
    var stream_type = document.getElementById("stream_type").value;
    var mathematics_s1 = document.getElementById('mathematics_s1')
    var mathematics_s2 = document.getElementById('mathematics_s2')
    var mathematics_s3 = document.getElementById('mathematics_s3')
    var science_s1 = document.getElementById('science_s1')
    var science_s2 = document.getElementById('science_s2')
    var science_s3 = document.getElementById('science_s3')
    var commerce_s1 = document.getElementById('commerce_s1')
    var commerce_s2 = document.getElementById('commerce_s2')
    var commerce_s3 = document.getElementById('commerce_s3')
    var arts_s1 = document.getElementById('arts_s1')
    var arts_s2 = document.getElementById('arts_s2')
    var arts_s3 = document.getElementById('arts_s3')


    if (stream_type === '2') {
        displayBlock(mathematics_s1, mathematics_s2, mathematics_s3)
        displayNone(science_s1, science_s2,science_s3, commerce_s1, commerce_s2, commerce_s3, arts_s1, arts_s2, arts_s3);
    }else if (stream_type === '1') {
        displayBlock(science_s1, science_s2, science_s3)
        displayNone(mathematics_s1, mathematics_s2, mathematics_s3, commerce_s1, commerce_s2, commerce_s3, arts_s1, arts_s2, arts_s3);
    }else if (stream_type === '3') {
        displayBlock(commerce_s1, commerce_s2, commerce_s3)
        displayNone(mathematics_s1, mathematics_s2,mathematics_s3, science_s1, science_s2, science_s3, arts_s1, arts_s2, arts_s3);
    }else if (stream_type === '4') {
        displayBlock(arts_s1, arts_s2, arts_s3)
        displayNone(mathematics_s1, mathematics_s2, mathematics_s3, science_s1, science_s2, science_s3, commerce_s1, commerce_s2, commerce_s3);
    }else{
        displayNoneAll()
    }
}

function displayNone() {
    let i;
    for(i = 0; i < arguments.length; i++) {
        arguments[i].style.display = "none";
    }
}

function displayBlock() {
    let i;
    for(i = 0; i < arguments.length; i++) {
        arguments[i].style.display = "block";
    }
}

function displayNoneAll() {
    var mathematics_s1 = document.getElementById('mathematics_s1')
    var mathematics_s2 = document.getElementById('mathematics_s2')
    var mathematics_s3 = document.getElementById('mathematics_s3')
    var science_s1 = document.getElementById('science_s1')
    var science_s2 = document.getElementById('science_s2')
    var science_s3 = document.getElementById('science_s3')
    var commerce_s1 = document.getElementById('commerce_s1')
    var commerce_s2 = document.getElementById('commerce_s2')
    var commerce_s3 = document.getElementById('commerce_s3')

    var arts_s1 = document.getElementById('arts_s1')
    var arts_s2 = document.getElementById('arts_s2')
    var arts_s3 = document.getElementById('arts_s3')

    displayNone(mathematics_s1, mathematics_s2, mathematics_s3,
        science_s1, science_s2, science_s3, commerce_s1, commerce_s2, commerce_s3,
        arts_s1, arts_s2, arts_s3);
}
