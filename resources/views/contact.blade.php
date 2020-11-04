@extends('layouts.app')
@section('pageTitle', 'Contact')
@section('logo', 'logo')
@section('content')
    @php
        use Illuminate\Support\Facades\Session;
    @endphp
<!-- ======= Contact Section ======= -->
<section id="contact" class="contact">

    <div data-aos="fade-up">
        <iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.138563762115!2d80.01105631429917!3d9.669199893078442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe54019e8b93df%3A0x2639f9077aecdc9a!2sNorth%20Lanka%20Institute%20Of%20Information%20Technology!5e0!3m2!1sen!2slk!4v1603003760547!5m2!1sen!2slk" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>

    <div class="container" data-aos="fade-up">

        <div class="row mt-5">
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-md-12">
                        <div class="info-box">
                            <i class="bx bx-map"></i>
                            <h3>Our Address</h3>
                            <p>Top Floor, Peoples Bank Building, Stanley Road, Jaffna, Sri Lanka</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="info-box mt-4">
                            <i class="bx bx-envelope"></i>
                            <h3>Email Us</h3>
                            <p>northlankaiit@yahoo.com</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="info-box mt-4">
                            <i class="bx bx-phone-call"></i>
                            <h3>Call Us</h3>
                            <p>+94 21 492 7088 </p>
                        </div>
                    </div>
                </div>

            </div>

            <div class="col-lg-6">

                <div class=" {{ session::has('success')  ? "alert alert-primary": "" }}" role="alert" style="font-size: 14px;">
                    <span>{{ session::has('success')  ? session::get('success') : "" }}</span>
                </div>

                <form action="/contact" method="post" role="form">
                    @csrf
                    <div class="form-row">
                        <div class="col form-group">
                            <input type="text" name="name" required class="form-control form-control-sm" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div class="validate"></div>
                        </div>
                        <div class="col form-group">
                            <input type="email" required class="form-control form-control-sm" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div class="validate"></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control form-control-sm" required name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                        <div class="validate"></div>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control form-control-sm" required name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                        <div class="validate"></div>
                    </div>

                    <button class="btn btn-sm btn-rounded" type="submit" style="background: #3fbbc0;color: #fff;">Send Message</button>
                </form>
            </div>

        </div>

    </div>
</section><!-- End Contact Section -->

@endsection
