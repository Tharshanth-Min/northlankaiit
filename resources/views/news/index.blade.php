@extends('layouts.app')
@section('pageTitle', 'News')
@section('logo', 'logo')
@section('content')
<section id="news">
    <div class="container" data-aos="fade-up">
        <div class="section-title mt-4">
            <h6>News</h6>
        </div>
        @if(count($news) > 0)
        <div class="row">
            @foreach($news as $data)
            <div class="col-lg-4 col-md-6 d-flex mt-2 align-items-stretch" >
                <div class="card bg-light border-0" style="width: 18rem;">
                    <img class="card-img-top" src="{{ isset($data->newsImages[0]) ? asset('storage/northLankaIIT/news/news-'. $data->id. '/'. $data->newsImages[0]['image']) : "assets/img/news.png" }}" alt="Card image cap">
                    <div class="card-body shadow">
                        <h5 class="card-title"><a href="{{url('/news/'.$data->title) }}" style="color: #000;">{{ $data->title }}</a></h5>
                        <span class="card-text"><small class="text-muted">Posted By: {{ $data->posted_by }}</small></span>
                        <p class="card-text"><small class="text-muted">{{ $data->posted_on }}</small></p>
                    </div>
                </div>
            </div>
            @endforeach
        </div>
            <div class="float-right mt-4">
                {!! $news->links("pagination::bootstrap-4") !!}
            </div>
        @else
            <div class="row justify-content-md-center">
                <div class="col-md-auto">
                    <div class="alert alert-success success" role="alert">
                        <p><i class="icofont-check-circled mr-1"></i>No News found!</p>
                    </div>
                </div>
            </div>
        @endif
    </div>
</section>
@endsection
