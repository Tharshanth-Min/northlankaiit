@extends('layouts.app')
@section('pageTitle', 'Videos')
@section('logo', 'logo')
@section('content')

    <!-- ======= Gallery Section ======= -->
    <section id="video" class="video ">
        <div class="container" data-aos="fade-up">
            <div class="section-title">
                <h6>videos</h6>
            </div>
                <div class="row">
                    <div class="col-lg-6 col-md-6 d-flex align-items-stretch">
                        <iframe width="100%" height="300" src="https://www.youtube.com/embed/9WvU1OITpXo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="col-lg-6 col-md-6 mt-lg-0 mt-2 mt-md-2 mt-ms-2 d-flex align-items-stretch">
                        <iframe width="560" height="300" src="https://www.youtube.com/embed/MyBIfCxJNvk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
    </section>
@endsection
