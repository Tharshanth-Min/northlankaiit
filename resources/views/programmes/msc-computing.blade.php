@extends('layouts.app')
@section('pageTitle', 'MSc in Computer Science')
@section('logo', 'logo')
@section('content')
    <!-- ======= About Us Section ======= -->
    <section id="programme" class="programme">
        <div class="container" data-aos="fade-up">
            <div class="row">
                <div class="col-lg-8 pt-4 pt-lg-0 content text-justify" data-aos="fade-left">
                    <div class="section-title2">
                        <h6>MSc in Computer Science</h6>
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
                            <img src="/assets/img/programmes/msc-computing.jpg" class="img-fluid" style="border-radius: 10px; width: 100%; height: 300px" alt="">
                        </div>
                    </div>
                </div>
            </div>

            <div class="container" data-aos="fade-up">
                <div class="row pt-lg-5">
                    <div class="entry">
                        <h6>Entry requirements</h6>
                        <p>Should possess a degree at any UGC recognized institute or University</p>
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
                                        <tr><td>Fundamentals of Computer Application </td></tr>
                                        <tr><td>Software Engineering </td></tr>
                                        <tr><td>Object Oriented Programming with C++</td></tr>
                                        <tr><td>Client / Server Computing using Oracle </td></tr>
                                        <tr><td>Windows & Visual Basic</td></tr>
                                        <tr><td>Information Technology & ITS Applications </td></tr>
                                        <tr><td>Computer Programming - Lab</td></tr>
                                        </tbody>
                                    </table>
                                    <p>* Research - Should be submited in more than 250 pages in the relevant field</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section><!-- End About Us Section -->
@endsection
