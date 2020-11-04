@extends('layouts.app')
@section('pageTitle', 'Institute Goal')
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
                <h2>Goals of the Institute</h2>

            </div>

            <div class="row">
                <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                    <h5>In support of its philosophy and mission, NORTH LANKA IIT's goals are as follows:</h5>
                    <p></p>
                    <ul>
                        <li><i class="icofont-check-circled"></i>To enable the domestic students population to achieve personal and professional goals</li>
                        <li><i class="icofont-check-circled"></i>To guide students in adapting their knowledge, training and skills to the work place in the computer field</li>
                        <li><i class="icofont-check-circled"></i>To expedite the development of critical thinking and lifelong learning skills in computer field</li>
                        <li><i class="icofont-check-circled"></i>To provide academic programmes, services facilities, and technologies that support team based learning and contribute to students intellectual development and personal growth</li>
                        <li><i class="icofont-check-circled"></i>To coach and prepare students for job placement and career success, utilizing a network of professional and business contact in computer field</li>
                    </ul>
                </div>
                <div class="col-lg-4" data-aos="fade-right">
                    <img src="assets/img/slide-2/slide4.jpg" class="img-fluid" style="height: 250px; width: 100%; border-radius: 5px" alt="">
                </div>
            </div>

        </div>
    </section><!-- End About Us Section -->


@endsection
@section('content')

@endsection
