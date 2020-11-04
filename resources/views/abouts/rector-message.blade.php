@extends('layouts.app')
@section('pageTitle', 'Rector Message')
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
                <h6>Message from the Rector / Founder of NORTH LANKA IIT</h6>
            </div>

            <div class="row">
                <div class="col-lg-3" data-aos="fade-right">
                    <div id="testimonials" class="testimonials">
                    <div class="testimonial-item">
                        <img src="assets/img/profile_pics/rector.jpg" class="img-fluid" style="border-radius: 20px; width: 80%; height: 200px ; margin: auto" alt="">
                        <h6>Mr.S.A. Balasubramaniam</h6>
                        <h4>Rector &amp; Founder</h4>
                    </div>
                    </div>
                </div>
                <div class="col-lg-9 pt-4 pt-lg-0 content text-justify" data-aos="fade-left">
                    <p class="font-italic">
                        We North Lanka IIT Campus, since 1997 is the leading UGC (University Grant Commission Sri Lanka) approved degree education provider in Northern Province. As a community based educational institute, NLIIT relies strong relationship and provide education and training opportunities that are accessible and relevant to rural laborer markets.
                        In 2003, NORTH LANKA IIT started as an accredited centre in Sri Lanka, focusing on computer training that today's leaders to become super leaders in computer field. The B.Sc.(Computer Science) program is facilitated and coordinated in Sri Lanka by eminent and experienced academic panel of NORTH LANKA IIT.
                    </p>
                    <p class="font-italic">
                        NORTH LANKA IIT was established as a comprehensive academic institution of higher learning in computer field. Our world revolves around overlapping priorities and responsibilities. At NORTH LANKA IIT we focus on offering industry related current Diplomas, Advanced Diplomas, and Degree programs that can help you achieve your personal, professional and academic objectives.
                        NORTH LANKA IIT's emphasis is on international degree education. By focusing on computer related studies, NORTH LANKA IIT can ensure a concentrated faculty body, specialized curriculum, and active student faculty interaction.
                    </p>

                    <p class="font-italic" style="color: #111; margin-top: 30px">
                        Our Rector and Founder<br>
                        Mr.S.A.Balasubramaniam<br>
                        B.Sc(Hons). in Computer Science<br>
                        M.Sc. in Computer Science<br>
                        Ph.D (Reading).<br>
                    </p>
                </div>
            </div>

        </div>
    </section><!-- End About Us Section -->
@endsection
