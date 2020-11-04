@extends('layouts.app')
@section('pageTitle', $news->title)
@section('logo', 'logo')
@section('content')
    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs2">
        <div class="lisa">
            <ol>
                <li><a href="{{ url('/blog') }}">News</a></li>
                <li>{{$news->title}}</li>
            </ol>
        </div>
    </section><!-- End Breadcrumbs -->

    <div id="news-image">
        <div class="container" data-aos="fade-up">
            <div class="post-title">
                <h3 style="color: #000; ">{{$news->title}}</h3>
                <div class="mt-3 text-muted" style="font-size: 16px">{!! $news->description !!}</div>
            </div>
            <div class="row">
                @foreach($news->newsImages as $data)
                    <div class="col-lg-12 col-md-12 d-flex mt-2 mb-2 align-items-stretch">
                        <img class="img-fluid" style="width: 100%" src="{{ isset($data->image) ? asset('storage/northLankaIIT/news/news-'. $news->id. '/'. $data->image) : "assets/img/news.png" }}" alt="Card image cap">
                    </div>
                @endforeach
            </div>
        </div>
    </div>
@endsection
