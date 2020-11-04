@extends('layouts.app')
@section('pageTitle', 'Register Online')
@section('logo', 'logo2')
@section('content')
    <section id="student" class="student">

        <div class="container" data-aos="fade-up">
            <div class="section-title">
                <h6>Registration Form</h6>
            </div>
            <div class="row">
                <div class="col-lg-12 pt-lg-0 p-sm-2 content text-justify" data-aos="fade-left">
                    <div class="registration-form-tab">
                        <h6>Personal Information</h6>
                    </div>
                    <form action="/student-register-online" method="post" id="studentForm">
                        @csrf
                        <div class="form-row">
                            <div class="col-md-2 mb-3  md-form">
                                <div class="form-group">
                                    <label for="title">Title</label>
                                    <select class="custom-select browser-default" id="title" name="title">
                                        <option value="">select your title</option>
                                        <option value="mr">Mr</option>
                                        <option value="mrs">Mrs</option>
                                        <option value="ms">Ms</option>
                                        <option value="miss">Miss</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-3 mb-3 md-form">
                                <label for="firstname">First name</label>
                                <input type="text"
                                       class="form-control"
                                       id="firstName"
                                       name="firstName"
                                       placeholder="First name">
                            </div>

                            <div class="col-md-3 mb-3 md-form">
                                <label for="lastName">Last name</label>
                                <input type="text"
                                       class="form-control"
                                       id="lastName"
                                       name="lastName"
                                       placeholder="Last name" >
                            </div>

                            <div class="col-md-4 mb-3 md-form">
                                <div class="form-group">
                                    <label for="courseName">Course name</label>
                                    <select class="custom-select browser-default" id="courseName" name="courseName">
                                        <option value="">Choose a course</option>
                                        <option value="1">B.Sc in COMPUTER SCIENCE</option>
                                        <option value="2">B.Sc in COMPUTER SCIENCE (TOP UP)</option>
                                        <option value="3">M.Sc in COMPUTER SCIENCE </option>
                                        <option value="4">B.Sc in PHYSICAL EDUCATION & SPORTS</option>
                                        <option value="5">B.Sc in PHYSICAL EDUCATION & SPORTS (TOP UP)</option>
                                        <option value="6">MASTER OF BUSINESS ADMINISTRATION (M.BA)</option>
                                        <option value="7">DOCTOR OF BUSINESS ADMINISTRATION (D.BA)</option>
                                        <option value="8">B.Sc in CIVIL ENGINEERING (TOP UP)</option>
                                        <option value="9">BACHELOR OF EDUCATION (B.ED)</option>
                                        <option value="10">MASTER OF EDUCATION (M.ED)</option>
                                        <option value="11">DOCTOR OF EDUCATION (D.ED)</option>
                                        <option value="12">MASTER OF PUBLIC ADMINISTRATION (MPA)</option>
                                        <option value="13">BA in English (Top Up)</option>

                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col-md-3 mb-3 md-form">
                                <label for="nameCertification">Name on certification</label>
                                <input type="text"
                                       class="form-control"
                                       id="nameCertification"
                                       name="nameCertification"
                                       placeholder="Name on certification"
                                       aria-describedby="inputGroupPrepend2">
                            </div>

                            <div class="col-md-2 mb-3 md-form">
                                <label for="dateOfBirth">Date of birth</label>
                                <input type="date"
                                       id="dateOfBirth"
                                       class="form-control"
                                       name="dateOfBirth"
                                >
                            </div>

                            <div class="col-md-2 mb-3 md-form">
                                <div class="form-group">
                                    <label for="gender">Gender</label>
                                    <select class="custom-select browser-default" id="gender" name="gender">
                                        <option value="">select gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-2 mb-3 md-form">
                                <label for="nicPassportNo">NIC / Passport No</label>
                                <input type="text"
                                       class="form-control"
                                       id="nicPassportNo"
                                       placeholder="NIC / Passport No"
                                       name="nicPassportNo">
                            </div>

                            <div class="col-md-3 mb-3 md-form">
                                <div class="form-group">
                                    <label for="nationality">Nationality</label>
                                    <select class="custom-select browser-default" id="nationality" name="nationality">
                                        <option value="">select your nationality</option>
                                        <option value="Sri Lankan Tamil">Sri Lankan Tamil</option>
                                        <option value="Sri Lankan Moors">Sri Lankan Moors</option>
                                        <option value="Indian Tamil">Indian Tamil</option>
                                        <option value="Sinhalese">Sinhalese</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                        </div>

                        <div class="form-row">
                            <div class="col-md-3 mb-3 md-form">
                                <label for="telephone">Telephone</label>
                                <input type="text"
                                       id="personalNum"
                                       name="personalNum"
                                       class="form-control"
                                       placeholder="personal (ex:077)"
                                >
                                <input type="text"
                                       id="homeNum"
                                       class="form-control mt-1"
                                       name="homeNum"
                                       placeholder="Home (optional)"
                                >

                                <input type="text"
                                       id="officeNum"
                                       class="form-control mt-1"
                                       name="officeNum"
                                       placeholder="office (optional)"
                                >
                            </div>

                            <div class="col-md-3 mb-3 md-form">
                                <div class="form-group">
                                    <label for="address">Address</label>
                                    <textarea
                                            id="address"
                                            class="form-control"
                                            name="address"
                                    ></textarea>
                                </div>
                            </div>

                            <div class="col-md-3 mb-3 md-form">
                                <label for="emailAddress">Email address</label>
                                <input type="text"
                                       class="form-control"
                                       id="emailAddress"
                                       name="emailAddress"
                                       placeholder="Email">
                            </div>
                        </div>

                        <div class="registration-form-tab mt-3">
                            <hr>
                            <h6>Education Qualification</h6>
                        </div>
                        <div class="form-row">

                            <div class="col-md-3 mb-3 md-form mt-2">
                                <div class="form-group">
                                    <div class="form-check">
                                        <input class="form-check-input"
                                               type="checkbox"
                                               checked
                                               id="oLevel"
                                               name="ol[]"
                                               value="checked"
                                               onclick="showOl()">
                                        <label class="form-check-label" for="oLevel">yes, I have ordinary level result</label>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-2 mb-3 md-form" id="ol_year_examination" style="display: block" >
                                <label for="ol_year_examination">Year of examination</label>
                                <input type="date"
                                       id="ol_year_examination"
                                       class="form-control"
                                       name="ol_year_examination"
                                >
                            </div>

                            <div class="col-md-2 mb-3 md-form" id="ol_index_no" style="display: block">
                                <label for="ol_index_no">Index no</label>
                                <input type="text"
                                       id="ol_index_no"
                                       class="form-control"
                                       name="ol_index_no"
                                       placeholder="Index no (optional)"
                                >
                            </div>

                            <div class="col-md-2 mb-3 md-form" id="ol_math" style="display: block">
                                <div class="form-group">
                                    <label for="olMath">Math</label>
                                    <select class="custom-select browser-default" id="olMath" name="olMath">
                                        <option value="">Select grade</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                        <option value="S">S</option>
                                        <option value="F">F</option>
                                        <option value="Nope">Nope</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-2 mb-3 md-form" id="ol_science" style="display: block">
                                <div class="form-group">
                                    <label for="olScience">Science</label>
                                    <select class="custom-select browser-default" id="olScience" name="olScience">
                                        <option value="">Select grade</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                        <option value="S">S</option>
                                        <option value="F">F</option>
                                        <option value="Nope">Nope</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="form-row" >
                            <div class="col-md-3 mb-3 md-form mt-2"></div>
                            <div class="col-md-2 mb-3 md-form" id="ol_english">
                                <div class="form-group" style="margin-top: -20px">
                                    <label for="olEnglish">English</label>
                                    <select class="custom-select browser-default" id="olEnglish" name="olEnglish">
                                        <option value="">Select grade</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                        <option value="S">S</option>
                                        <option value="F">F</option>
                                        <option value="Nope">Nope</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-2 mb-3 md-form" id="ol_english">
                                <div class="form-group" style="margin-top: -20px">
                                    <label for="olEnglish">Remark</label>
                                    <textarea
                                            id="olRemark"
                                            class="form-control"
                                            name="olRemark"
                                            style="height: 100px"
                                            placeholder="(optional)"
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col-md-3 mb-3 md-form mt-2">
                                <div class="form-group">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox"  name="al[]" checked value="checked" id="aLevel" onclick="showAl()">
                                        <label class="form-check-label" for="aLevel">
                                            yes, I have Advanced level result
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-2 mb-3 md-form" id="al_stream" style="display: block" >
                                <div class="form-group">
                                    <select class="custom-select browser-default" id="stream_type" name="stream_type" onchange="streamType()">
                                        <option value="">select your stream</option>
                                        <option value="1">Science</option>
                                        <option value="2">Mathematics</option>
                                        <option value="3">Commerce</option>
                                        <option value="4">Arts</option>
                                    </select>
                                </div>
                            </div>
                            @include('streamTypes.al-math-stream')
                            @include('streamTypes.al-science-stream')
                            @include('streamTypes.al-commerce-stream')
                            @include('streamTypes.al-arts-stream')
                        </div>

                        <div class="registration-form-tab mt-3">
                            <hr>
                            <h6>Others</h6>
                        </div>

                        <div class="form-row">
                            <div class="col-md-4 mb-3 md-form mt-2">
                                <div class="form-group">
                                    <label for="other_qua">Other Qualification</label>
                                    <textarea
                                            id="other_qua"
                                            class="form-control"
                                            name="other_qua"
                                            style="height: 150px"
                                            placeholder="(optional)"
                                    ></textarea>
                                </div>
                            </div>

                            <div class="col-md-4 mb-3 md-form mt-2" id="ol_year_examination" style="display: block" >
                                <div class="form-group">
                                    <label for="word_ex">Work Experience</label>
                                    <textarea
                                            id="word_ex"
                                            class="form-control"
                                            name="word_ex"
                                            style="height: 150px"
                                            placeholder="(optional)"
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        <button class="btn btn-sm btn-rounded" type="submit" style="background: #3fbbc0;color: #fff;">REGISTER</button>
                        <a  class="btn btn-light btn-sm btn-rounded" onclick="cancel()">CANCEL</a>
                    </form>
                </div>
            </div>
        </div>
    </section>

@endsection

@section('js')
    <script src="{{ asset('assets/js/validate.js') }}"></script>
    <script>
        function cancel() {
            var r = confirm("Do you really want to cancel this registration?");
            if (r == true) {
                window.location.href = "/";
            }
        }
    </script>
@endsection

