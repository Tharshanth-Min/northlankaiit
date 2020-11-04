@extends('layouts.app')
@section('pageTitle', 'Home')
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

    <!-- ======= About Us Section ======= -->
    <section id="about" class="about">
        <div class="container" data-aos="fade-up">

            <div class="section-title">
                <h2>About NLIIT</h2>

            </div>

            <div class="row">
                <div class="col-lg-5" data-aos="fade-right">
                    <img src="assets/img/about.png" style="height: 470px" class="img-fluid about-img" alt="">
                </div>
                <div class="col-lg-7 pt-4 pt-lg-0 content" data-aos="fade-left">
                    <h3>Approvals to our Campus.</h3>
                    <p>Our certificates are approved by UGC and are issued from universities
                        that are listed in the International Handbook of Universities published by the International Association of Universities</p>
                    <ul>
                        <li><i class="icofont-check-circled"></i>
                            <a href="assets/img/approvals/University-Grants Commission-Srilanka.jpg" target="_blank">University Grants Commission, Sri Lanka</a>
                        </li>
                        <li><i class="icofont-check-circled"></i>
                            <a href="#">Ministry of Education, Nothern Province, Sri Lanka</a>
                        </li>
                        <li><i class="icofont-check-circled"></i>
                            <a href="assets/img/approvals/Ministry-of-Education-Eastern-Province-Srilanka.jpg" target="_blank">Ministry of Education, Eastern Province, Sri Lanka</a>
                        </li>
                        <li><i class="icofont-check-circled"></i><a href="assets/img/approvals/The-Business-University-of-Costa-Rica-Srilanka.jpg" target="_blank">The Business University of Costa Rica, Sri Lanka</a>
                        </li>
                    </ul>

                    <h3>Our Degree Awarding University is.</h3>
                    <ul>
                        <li><i class="icofont-check-circled"></i><a href="assets/img/approvals/University-The-Business-University-of-Costa-Rica.jpg" target="_blank">The Business University of Costa Rica</a>
                        </li>
                    </ul>
                    <h3>NLIIT is Recognized in the Global Stage.</h3>
                    <ul>
                        <li><i class="icofont-check-circled"></i> NLIIT is recognized in the global stage as we are also a partner
                            institution of: Isles International University EU / UK</li>
                    </ul>
                </div>
            </div>

        </div>
    </section><!-- End About Us Section -->

    <!-- ======= Cta Section ======= -->
    <section id="cta" class="cta">
        <div class="container" data-aos="zoom-in">

            <div class="text-center">
                <h3>Right choice for degree education in Srilanka</h3>
                <p>NLIIT is a prestigious educational institution in Sri Lanka, offering UGC approved Diploma, Bachelor, Master & Doctorate degree programs for students all over the world.
                    Vision: We NORTH LANKA IIT Management highly committed to offer superior academic programmes to our students in order to achieve that we are on a preliminary dialogue with several foreign Colleges and universities.
                    Mission: Our effort is to give our students the globally recognized qualification in a fraction of cost, equivalent to foreign standard degrees
                </p>
                <a class="cta-btn scrollto" href="{{url('/student-register-online') }}">Register for a quality Degree</a>
            </div>

        </div>
    </section><!-- End Cta Section -->

    <!-- ======= Testimonials Section ======= -->
    <section id="testimonials" class="testimonials">
        <div class="container" data-aos="fade-up">

            <div class="section-title">
                <h2>Testimonials</h2>
                <p>
                    NLIIT is a prestigious educational institution in Sri Lanka, offering UGC approved Diploma, Bachelor, Master & Doctorate degree programs for students all over the world.
                    Vision: We NORTH LANKA IIT Management highly committed to offer superior academic programmes to our students.
                </p>
            </div>

            <div class="owl-carousel testimonials-carousel" data-aos="fade-up" data-aos-delay="100">

                <div class="testimonial-item">
                    <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        This school is worth applying because the faculty really puts a lot of effort into students. When a student has a problem, the teacher would walk to their desk and help the student<i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
                    <h3>Sanmugam Gopitha</h3>
                    <h4>M.Sc in COMPUTER SCIENCE</h4>
                </div>

                <div class="testimonial-item">
                    <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        I definitely would recommend Northlanka IIT and would encourage students to study hard and inform themselves as much as possible about the several academic opportunities the Institution offers.
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="">
                    <h3>Jegan Logesan</h3>
                    <h4>B.Sc in COMPUTER SCIENCE</h4>
                </div>

                <div class="testimonial-item">
                    <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        I am excited to study at Northlanka IIT. I really like the instructors and advisors. They always help me when I have questions. I also really like my program and teachers.                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt="">
                    <h3>Jena Lisa</h3>
                    <h4>MASTER OF EDUCATION (M.ED)</h4>
                </div>

                <div class="testimonial-item">
                    <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        It’s been a great experience so far. I have found the professors and staff to be incredibly friendly and helpful as I am working on getting my degree. The curriculum for my major has good structure.                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt="">
                    <h3>Mohamad Rize</h3>
                    <h4>DOCTOR OF EDUCATION (D.ED)</h4>
                </div>

                <div class="testimonial-item">
                    <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        I joined Northlanka IIT many years ago and I loved it. That’s why I came back! I’m now working for our Associated Student Government as a Finance Officer <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt="">
                    <h3>John Cristina</h3>
                    <h4>B.Sc in COMPUTER SCIENCE</h4>
                </div>

                <div class="testimonial-item">
                    <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        We really love Northlanka IIT. We have a wonderful time studying here. My son receives all the care, support, and attention in the Early Learning Center, and I feel very confident about that.
                        Northlanka IIT is a safe place for us.                   </p>
                    <img src="assets/img/testimonials/testimonials-6.jpg" class="testimonial-img" alt="">
                    <h3>Pratheep Vasanth</h3>
                    <h4>BACHELOR OF EDUCATION (B.ED)</h4>
                </div>

            </div>

        </div>
    </section><!-- End Testimonials Section -->

    <!-- ======= Gallery Section ======= -->
    <section id="gallery" class="gallery">
        <div class="container" data-aos="fade-up">

            <div class="section-title">
                <h2>Adds Gallery</h2>
            </div>

            <div class="owl-carousel gallery-carousel" data-aos="fade-up" data-aos-delay="100">
                <a href="assets/img/gallery/gallery-1.jpg" class="venobox" data-gall="gallery-carousel"><img src="assets/img/gallery/gallery-1.jpg" alt=""></a>
                <a href="assets/img/gallery/gallery-2.jpg" class="venobox" data-gall="gallery-carousel"><img src="assets/img/gallery/gallery-2.jpg" alt=""></a>
                <a href="assets/img/gallery/gallery-3.jpg" class="venobox" data-gall="gallery-carousel"><img src="assets/img/gallery/gallery-3.jpg" alt=""></a>
                <a href="assets/img/gallery/gallery-4.jpg" class="venobox" data-gall="gallery-carousel"><img src="assets/img/gallery/gallery-4.jpg" alt=""></a>
                <a href="assets/img/gallery/gallery-5.jpg" class="venobox" data-gall="gallery-carousel"><img src="assets/img/gallery/gallery-5.jpg" alt=""></a>
                <a href="assets/img/gallery/gallery-6.jpg" class="venobox" data-gall="gallery-carousel"><img src="assets/img/gallery/gallery-6.jpg" alt=""></a>
                <a href="assets/img/gallery/gallery-7.jpg" class="venobox" data-gall="gallery-carousel"><img src="assets/img/gallery/gallery-7.jpg" alt=""></a>
                <a href="assets/img/gallery/gallery-8.jpg" class="venobox" data-gall="gallery-carousel"><img src="assets/img/gallery/gallery-8.jpg" alt=""></a>
            </div>

        </div>
    </section><!-- End Gallery Section -->

@endsection
