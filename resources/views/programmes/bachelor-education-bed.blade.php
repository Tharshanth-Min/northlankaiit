@extends('layouts.app')
@section('pageTitle', 'Bachelor of Education (BED)')
@section('logo', 'logo')
@section('content')
    <section id="programme" class="programme">
        <div class="container" data-aos="fade-up">
            <div class="row">
                <div class="col-lg-8 pt-4 pt-lg-0 content text-justify" data-aos="fade-left">
                    <div class="section-title2">
                        <h6>Bachelor of Education (BED)</h6>
                        <p>The programme aims to provide students with the knowledge, skills, and comprehension required to allow them to contribute to the planning, design and management of modern network-based computer systems.</p>
                    </div>

                    <div class="row">
                        <div class="col-lg-3 pt-lg-4 mr-2 content text-justify bg-light" data-aos="fade-left">
                            <p style="text-align: center;">Approved by the University Grants Commission under the Universities Act</p>
                            <img src="/assets/img/ugc.png" class="img-fluid ugc" alt="">
                        </div>

                        <div class="col-lg-5 pt-lg-4 pt-sm-5 content bg-light" data-aos="fade-left">
                            <ul>
                                <li><i class="bx bx-time"></i>Duration : 18 months | 2 - 3 Years</li>
                                <li><i class="bx bxs-graduation"></i>Entry : January / March </li>
                                <li><i class="bx bxs-edit-location"></i>Location : Jaffna</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4" data-aos="fade-right">
                    <div id="testimonials" class="testimonials">
                        <div class="testimonial-item">
                            <img src="/assets/img/programmes/bachelor-educa-bed.jpg" class="img-fluid" style="border-radius: 10px; width: 100%; height: 300px" alt="">
                        </div>
                    </div>
                </div>
            </div>

            <div class="container" data-aos="fade-up">
                <div class="row pt-lg-5">
                    <div class="entry">
                        <h6>Entry requirements</h6>
                        <p>Passes in three subjects in any stream at the G.C.E. (Advanced Level)
                            examination or College of Education, Training College
                        </p>
                    </div>

                    <div class="col-lg-12 pt-4 pt-lg-0 content text-justify semester" data-aos="fade-left">
                        <div>
                            <nav>
                                <div class="nav nav-tabs pt-2" id="nav-tab" role="tablist">
                                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Year 01</a>
                                    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Year 02</a>
                                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Year 03</a>
                                </div>
                            </nav>

                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <table class="rwd-table">
                                        <tbody>
                                        <tr><td class="bold-text-td" colspan="3">Academic Subject Component</td></tr>
                                        <tr><td>Tamil </td></tr>
                                        <tr><td>Art</td></tr>
                                        <tr><td>English </td></tr>
                                        <tr><td>IT</td></tr>
                                        <tr><td>Maths</td></tr>
                                        <tr><td>Primary Education</td></tr>

                                        <tr><td class="bold-text-td" colspan="3">Professional Component 1</td></tr>
                                        <tr><td>Psychological Foundation in Education</td></tr>
                                        <tr><td>Psychological and Sociological Foundation in Education</td></tr>
                                        <tr><td>Historical Foundation in Education and Current Problems</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <table class="rwd-table">
                                        <tbody>
                                        <tr><td class="bold-text-td" colspan="3">Professional Component 2</td></tr>
                                        <tr><td>Educational Measurement and Evaluation </td></tr>
                                        <tr><td>School Management </td></tr>
                                        <tr><td>School Counseling </td></tr>

                                        <tr><td class="bold-text-td" colspan="3">General Component</td></tr>
                                        <tr><td>Teaching Project</td></tr>
                                        <tr><td>Minor-Research Project</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                    <table class="rwd-table">
                                        <tbody>
                                        <tr><td class="bold-text-td" colspan="3">Practical Component</td></tr>
                                        <tr><td>Educational Research Methods </td></tr>

                                        <tr><td class="bold-text-td" colspan="3">Pedagogical Knowledge of Subjects</td></tr>
                                        <tr><td>Tamil </td></tr>
                                        <tr><td>Art</td></tr>
                                        <tr><td>English </td></tr>
                                        <tr><td>IT</td></tr>
                                        <tr><td>Maths</td></tr>
                                        <tr><td>Primary Education</td></tr>
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
