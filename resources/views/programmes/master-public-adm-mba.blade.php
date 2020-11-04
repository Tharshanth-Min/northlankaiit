@extends('layouts.app')
@section('pageTitle', 'Master of Public Administration (MPA)')
@section('logo', 'logo')
@section('content')
    <section id="programme" class="programme">
        <div class="container" data-aos="fade-up">
            <div class="row">
                <div class="col-lg-8 pt-4 pt-lg-0 content text-justify" data-aos="fade-left">
                    <div class="section-title2">
                        <h6>Master of Public Administration (MPA)</h6>
                        <p>The programme aims to provide students with the knowledge, skills, and comprehension required to allow them to contribute to the planning, design and management of modern network-based computer systems.</p>
                    </div>

                    <div class="row">
                        <div class="col-lg-3 pt-lg-4 mr-2 content text-justify bg-light" data-aos="fade-left">
                            <p style="text-align: center;">Approved by the University Grants Commission under the Universities Act</p>
                            <img src="/assets/img/ugc.png" class="img-fluid ugc" alt="">
                        </div>

                        <div class="col-lg-4 pt-lg-4 pt-sm-5 content bg-light" data-aos="fade-left">
                            <ul>
                                <li><i class="bx bx-time"></i>Duration : 1 Years</li>
                                <li><i class="bx bxs-graduation"></i>Entry : January / December </li>
                                <li><i class="bx bxs-edit-location"></i>Location : Jaffna</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4" data-aos="fade-right">
                    <div id="testimonials" class="testimonials">
                        <div class="testimonial-item">
                            <img src="/assets/img/programmes/master-public-admin.jpg" class="img-fluid" style="border-radius: 10px; width: 100%; height: 300px" alt="">
                        </div>
                    </div>
                </div>
            </div>

            <div class="container" data-aos="fade-up">
                <div class="row pt-lg-5">
                    <div class="entry">
                        <h6>Entry requirements</h6>
                        <p>Should possess any degree in the relevant program at any UGC recognized institute or University
                    </div>

                    <div class="col-lg-12 pt-4 pt-lg-0 content text-justify semester" data-aos="fade-left">
                        <div>
                            <nav>
                                <div class="nav nav-tabs pt-2" id="nav-tab" role="tablist">
                                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">One Year</a>
                                </div>
                            </nav>

                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <table class="rwd-table">
                                        <tbody>
                                        <tr><td class="bold-text-td" colspan="3">Modules</td></tr>
                                        <tr><td>Psychology of Learning</td></tr>
                                        <tr><td>Philosophical Thoughts on Education</td></tr>
                                        <tr><td>Sociological Thoughts on Education</td></tr>
                                        <tr><td>Research Methods in Education</td></tr>
                                        <tr><td>Teacher Education</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
