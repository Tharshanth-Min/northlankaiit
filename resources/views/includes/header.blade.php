
<!-- ======= Top Bar ======= -->
<div id="topbar" class="d-none d-lg-flex align-items-center fixed-top">
    <div class="container d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
            <i class="icofont-clock-time"></i> North Lanka IIT City Campus, Jaffna, Sri Lanka
        </div>
        <div class="d-flex align-items-center">
            <i class="icofont-phone"></i> Call us now +94 76 750 4535
        </div>
    </div>
</div>


<!-- ======= Header ======= -->
<header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">
        <a href="index.html" class="@yield('logo') mr-auto"><img src="{{ asset('assets/img/favicon.jpg') }}" alt=""></a>

        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <h1 class="logo mr-auto"><a href="index.html">Medicio</a></h1> -->

        <nav class="nav-menu d-none d-lg-block">
            <ul>

                <li class="{{ Request::is('/') ? 'active' : '' }}"><a href="{{ url('/') }}">Home</a></li>
                <li class="drop-down {{ Request::is('rector-message') ? 'active' : '' }}"><a href="{{ url('/rector-message') }}">About</a>
                    <ul>
                        <li class="{{ Request::is('rector-message') ? 'active' : '' }}"><a href="{{ url('/rector-message') }}">Rector's Message</a></li>
                        <li class="{{ Request::is('lecturers-message') ? 'active' : '' }}"><a href="{{ url('/lecturers-message') }}">Lecturers Pannel</a></li>
                        <li class="{{ Request::is('institute-goal') ? 'active' : '' }}"><a href="{{ url('/institute-goal') }}">Goals of the Institute</a></li>
                    </ul>
                </li>

                <li class="drop-down {{ Request::is('programmes/bsc-computer-science') ? 'active' : '' }}"><a href="">Programmes</a>
                    <ul>
                        <li><a href="{{ url('/programmes/bsc-computer-science') }}">B.Sc in COMPUTER SCIENCE</a></li>
                        <li><a href="{{ url('/programmes/bsc-computer-science-top-up') }}">B.Sc in COMPUTER SCIENCE(Top Up)</a></li>
                        <li><a href="{{ url('/programmes/msc-computer-science') }}">M.Sc in COMPUTER SCIENCE</a></li>
                        <li><a href="{{ url('/programmes/bsc-physical-education-sport') }}">B.Sc in PHYSICAL EDUCATION & SPORTS</a></li>
                        <li><a href="{{ url('/programmes/bsc-physical-education-sport-top-up') }}">B.Sc in PHYSICAL EDUCATION & SPORTS (TOP UP)</a></li>
                        <li><a href="{{ url('/programmes/mba-business-administration') }}">MASTER OF BUSINESS ADMINISTRATION (M.BA)</a></li>
                        <li><a href="{{ url('/programmes/dba-business-administration') }}">DOCTOR OF BUSINESS ADMINISTRATION (D.BA)</a></li>
                        <li><a href="{{ url('/programmes/bsc-civil-engineering-top-up') }}">B.Sc in CIVIL ENGINEERING (TOP UP)</a></li>
                        <li><a href="{{ url('/programmes/bachelor-education') }}">BACHELOR OF EDUCATION (B.ED)</a></li>
                        <li><a href="{{ url('/programmes/master-education') }}">MASTER OF EDUCATION (M.ED)</a></li>
                        <li><a href="{{ url('/programmes/doctor-education') }}">DOCTOR OF EDUCATION (D.ED)</a></li>
                        <li><a href="{{ url('/programmes/master-public-administration') }}">MASTER OF PUBLIC ADMINISTRATION (MPA)</a></li>
                        <li><a href="{{ url('/programmes/ba-english-top-up') }}">BA in English (Top Up)</a></li>

                    </ul>
                </li>
                <li class="{{ Request::is('gallery') ? 'active' : '' }}">
                    <a href="{{ url('/gallery') }}">Gallery</a>
                </li>
                <li class="{{ Request::is('blog') ? 'active' : '' }}"><a href="{{ url('/blog')}}">News</a></li>
                <li class="{{ Request::is('video') ? 'active' : '' }}"><a href="{{url('/video') }}">Video</a></li>
                <li class="{{ Request::is('contact') ? 'active' : '' }}"><a href="{{url('/contact') }}">Contact</a></li>

            </ul>
        </nav><!-- .nav-menu -->

        <a href="{{url('/student-register-online') }}" class="appointment-btn scrollto">Register Online</a>

    </div>
</header><!-- End Header -->
