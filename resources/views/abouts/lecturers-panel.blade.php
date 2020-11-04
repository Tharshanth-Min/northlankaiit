@extends('layouts.app')
@section('pageTitle', 'Lecture Panel')
@section('logo', 'logo')
@section('carousel')
    @include('includes.carousel')
@endsection
@section('content')
    <div id="lisa" style="background-color: #20123a" >
        <div class="container">
            @if($news)
                <marquee class="marquee">
                    <a href="{{url('/news/'.$news->title) }}" style="color: white">
                        <span>{!! strip_tags($news->title) !!} : </span>
                        <span>{!! strip_tags($news->description) !!} </span>
                    </a>
                </marquee>
            @else
                <marquee class="marquee">
                    <h6>No news found</h6>
                </marquee>
            @endif
        </div>
    </div>

    <!-- ======= Doctors Section ======= -->
    <section id="doctors" class="doctors section-bg">
        <div class="container" data-aos="fade-up">

            <div class="section-title">
                <h2>Board of Directors</h2>
            </div>

            <div class="row">

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style="height: 300px">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img">
                            <img src="assets/img/profile_pics/rector.jpg" class="lecture-img" alt="">
                        </div>
                        <div class="member-info">
                            <h4>Mr. S.A.Balasubramaniam</h4>
                            <span>B.Sc.(Hons) in Computer Science, M.Sc, Ph.D (Reading)</span>
                            <h4>Rector & Founder Dean of the Faculty of Computing.</h4>
                            <span>(North Lanka IIT City Campus)</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style="height: 300px">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img">
                            <img src="assets/img/profile_pics/avatar.jpg"  class="lecture-img" alt="">
                        </div>
                        <div class="member-info">
                            <h4>Mr. B.Gopalagissnan</h4>
                            <span>M.Sc.(Soft.Eng.)</span>
                            <h4>Director & Senior Lecturer</h4>
                            <span>(North Lanka IIT City Campus)</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style="height: 300px">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img">
                            <img src="assets/img/profile_pics/avatar.jpg" class="lecture-img" alt="">
                        </div>
                        <div class="member-info">
                            <h4>Prof.Dr. B. Thanabalan</h4>
                            <span>Ph.D</span>
                            <h4>Dean of the Faculty of Education</h4>
                            <span>(North Lanka IIT City Campus)</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style="height: 300px">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img" >
                            <img src="assets/img/profile_pics/avatar.jpg" class="lecture-img" alt="">
                        </div>
                        <div class="member-info">
                            <h4>Prof.Dr.T.Velnampy</h4>
                            <span>Ph.D</span>
                            <h4>Advisor Quality Assurance Council & Research Foundation</h4>
                            <span>(North Lanka IIT City Campus)</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style="height: 300px">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img">
                            <img src="assets/img/profile_pics/avatar.jpg" class="lecture-img" alt="">
                        </div>
                        <div class="member-info">
                            <h4>Prof.Dr.G.Mikunthan</h4>
                            <span>Ph.D</span>
                            <h4>Chief Advisor Quality Assurance Council & Research Foundation</h4>
                            <span>(North Lanka IIT City Campus)</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style="height: 300px">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img">
                            <img src="assets/img/profile_pics/avatar.jpg"  class="lecture-img" alt="">
                        </div>
                        <div class="member-info">
                            <h4>Prof.Dr.M. Vethanathan</h4>
                            <span>Ph.D</span>
                            <h4>Dean Hindu Civilization</h4>
                            <span>(North Lanka IIT City Campus)</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style="height: 300px">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img">
                            <img src="assets/img/profile_pics/avatar.jpg" class="lecture-img" alt="">
                        </div>
                        <div class="member-info">
                            <h4>Dr.Mrs.J Rasanajakam</h4>
                            <span>Ph.D</span>
                            <h4>Advisor Faculty of Education</h4>
                            <span>(North Lanka IIT City Campus)</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style="height: 300px">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img" >
                            <img src="assets/img/profile_pics/avatar.jpg" class="lecture-img" alt="">
                        </div>
                        <div class="member-info">
                            <h4>Dr.Pon. Alvappillai</h4>
                            <span>Ph.D</span>
                            <h4>Dean Faculty of Agriculture</h4>
                            <span>(North Lanka IIT City Campus)</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style="height: 300px">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img">
                            <img src="assets/img/profile_pics/avatar.jpg" class="lecture-img" alt="">
                        </div>
                        <div class="member-info">
                            <h4>Dr.Sabaananth</h4>
                            <span>Ph.D</span>
                            <h4>Coordinator & Advisor Physical Education & Sports</h4>
                            <span>(North Lanka IIT City Campus)</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style="height: 300px">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img">
                            <img src="assets/img/profile_pics/avatar.jpg"  class="lecture-img" alt="">
                        </div>
                        <div class="member-info">
                            <h4>Dr.K. Shriganesan</h4>
                            <span>Ph.D</span>
                            <h4>Advisor English Department</h4>
                            <span>(North Lanka IIT City Campus)</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style="height: 300px">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img">
                            <img src="assets/img/profile_pics/avatar.jpg" class="lecture-img" alt="">
                        </div>
                        <div class="member-info">
                            <h4>Prof.Dr. B. Thanabalan</h4>
                            <span>Ph.D</span>
                            <h4>Dean of the Faculty of Education</h4>
                            <span>(North Lanka IIT City Campus)</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style="height: 300px">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img" >
                            <img src="assets/img/profile_pics/avatar.jpg" class="lecture-img" alt="">
                        </div>
                        <div class="member-info">
                            <h4>Dr.Sanmuganathan</h4>
                            <span>Ph.D</span>
                            <h4>Advisor English Department</h4>
                            <span>(North Lanka IIT City Campus)</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style="height: 300px">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img">
                            <img src="assets/img/profile_pics/avatar.jpg" class="lecture-img" alt="">
                        </div>
                        <div class="member-info">
                            <h4>Mr.V. Ganesarajah</h4>
                            <span>SLEAS, Reading Ph.D</span>
                            <h4>Registrar</h4>
                            <span>(North Lanka IIT City Campus)</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style="height: 300px">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img">
                            <img src="assets/img/profile_pics/avatar.jpg"  class="lecture-img" alt="">
                        </div>
                        <div class="member-info">
                            <h4>Dr.N. Nallaiya</h4>
                            <span>Ph.D</span>
                            <h4>Coordinator for M.Ed</h4>
                            <span>(North Lanka IIT City Campus)</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style="height: 300px">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img">
                            <img src="assets/img/profile_pics/avatar.jpg" class="lecture-img" alt="">
                        </div>
                        <div class="member-info">
                            <h4>Dr.Pon. Jeyaroopan</h4>
                            <span>Ph.D</span>
                            <h4>Coordinator Batti Lanka City Campus, Batticaloa</h4>
                            <span>(North Lanka IIT City Campus)</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style="height: 300px">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img" >
                            <img src="assets/img/profile_pics/avatar.jpg" class="lecture-img" alt="">
                        </div>
                        <div class="member-info">
                            <h4>Dr.Mrs.J. Uthayakumar</h4>
                            <span>Ph.D</span>
                            <h4>Coordinator for B.Ed</h4>
                            <span>(North Lanka IIT City Campus)</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style="height: 300px">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img">
                            <img src="assets/img/profile_pics/avatar.jpg" class="lecture-img" alt="">
                        </div>
                        <div class="member-info">
                            <h4>Dr.S. Mugunthan</h4>
                            <span>Ph.D</span>
                            <h4>Dean Faculty of English</h4>
                            <span>(North Lanka IIT City Campus)</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style="height: 300px">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img">
                            <img src="assets/img/profile_pics/avatar.jpg"  class="lecture-img" alt="">
                        </div>
                        <div class="member-info">
                            <h4>Dr.Mrs.V.Sutharsini</h4>
                            <span>Ph.D</span>
                            <h4>Coordinator Art & Design</h4>
                            <span>(North Lanka IIT City Campus)</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style="height: 300px">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img">
                            <img src="assets/img/profile_pics/avatar.jpg" class="lecture-img" alt="">
                        </div>
                        <div class="member-info">
                            <h4>Dr.V. Kandasamy Iyar</h4>
                            <span>Ph.D</span>
                            <h4>Coordinator for Arts Faculty</h4>
                            <span>(North Lanka IIT City Campus)</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style="height: 300px">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img" >
                            <img src="assets/img/profile_pics/avatar.jpg" class="lecture-img" alt="">
                        </div>
                        <div class="member-info">
                            <h4>Dr.Mrs.S. Ranjit</h4>
                            <span>Ph.D</span>
                            <h4>Coordinator for B.Com</h4>
                            <span>(North Lanka IIT City Campus)</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style="height: 300px">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img">
                            <img src="assets/img/profile_pics/avatar.jpg" class="lecture-img" alt="">
                        </div>
                        <div class="member-info">
                            <h4>Mr.P. Rajikumar</h4>
                            <span>JP, B.Sc.</span>
                            <h4>Center Manager</h4>
                            <span>(North Lanka IIT City Campus)</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style="height: 300px">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img">
                            <img src="assets/img/profile_pics/avatar.jpg"  class="lecture-img" alt="">
                        </div>
                        <div class="member-info">
                            <h4>Mr.V. Karunagalingam</h4>
                            <span>Reading Ph.D</span>
                            <h4>Visiting Lecturer</h4>
                            <span>(North Lanka IIT City Campus)</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style="height: 300px">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img">
                            <img src="assets/img/profile_pics/avatar.jpg" class="lecture-img" alt="">
                        </div>
                        <div class="member-info">
                            <h4>Fr.K.J. Singarayar</h4>
                            <span>Reading Ph.D</span>
                            <h4>Visiting Lecturer</h4>
                            <span>(North Lanka IIT City Campus)</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style="height: 300px">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img" >
                            <img src="assets/img/profile_pics/avatar.jpg" class="lecture-img" alt="">
                        </div>
                        <div class="member-info">
                            <h4>Er.S. Jeyakumar</h4>
                            <span>M.Sc. in Civil Eng</span>
                            <h4>Visiting Lecturer</h4>
                            <span>(North Lanka IIT City Campus)</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style="height: 300px">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img">
                            <img src="assets/img/profile_pics/avatar.jpg" class="lecture-img" alt="">
                        </div>
                        <div class="member-info">
                            <h4>Mr.Y. Bavaneethan</h4>
                            <span>M.Sc</span>
                            <h4>Visiting Lecturer</h4>
                            <span>(North Lanka IIT City Campus)</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style="height: 300px">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img">
                            <img src="assets/img/profile_pics/avatar.jpg"  class="lecture-img" alt="">
                        </div>
                        <div class="member-info">
                            <h4>Dr. Kesavan</h4>
                            <span>Ph.D</span>
                            <h4>Visiting Lecturer for Physical Education & Sports</h4>
                            <span>(North Lanka IIT City Campus)</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style="height: 300px">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img">
                            <img src="assets/img/profile_pics/avatar.jpg" class="lecture-img" alt="">
                        </div>
                        <div class="member-info">
                            <h4>Mr.N. Logendiran</h4>
                            <span>M.Ed</span>
                            <h4>Coordinator</h4>
                            <span>(North Lanka IIT City Campus)</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" style="height: 300px">
                    <div class="member" data-aos="fade-up" data-aos-delay="400">
                        <div class="member-img" >
                            <img src="assets/img/profile_pics/avatar.jpg" class="lecture-img" alt="">
                        </div>
                        <div class="member-info">
                            <h4>Mr.S. Jeevatharan</h4>
                            <span>B.Ed</span>
                            <h4>Coordinator</h4>
                            <span>(North Lanka IIT City Campus)</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </section><!-- End Doctors Section -->

@endsection
