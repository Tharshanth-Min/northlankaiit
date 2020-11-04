@extends('layouts.app')
@section('pageTitle', 'succeed')
@section('logo', 'logo')

@section('content')
    @php
        use Illuminate\Support\Facades\Session;
    @endphp
    <!-- ======= success Section ======= -->
    <section id="success" class="success" style="margin-top: 200px">

        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-md-auto">
                    <div class="alert alert-success success" role="alert">
                        <p><i class="icofont-check-circled mr-1"></i>Thank your for registration with us
                        <strong style="text-transform: capitalize"> {{ session::has('success')  ? session::get('success') : "" }}</strong>
                            </br>We will process your application very soon.</p>
                    </div>
                </div>
            </div>
        </div>

    </section><!-- End success Section -->

@endsection
