<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProgramController extends Controller {

    public function bscComputing() {
        return view('programmes.bsc-computing');
    }

    public function bscComputingTopUp() {
        return view('programmes.bsc-computing-top-up');
    }

    public function mscComputing() {
        return view('programmes.msc-computing');
    }

    public function bscPhysicalEduSpot() {
        return view('programmes.bsc-physical-edu-spot');
    }

    public function bscPhysicalEduSpotTopUp() {
        return view('programmes.bsc-physical-edu-spot-top-up');
    }

    public function mabBusinessAdmins() {
        return view('programmes.master-business-adm-mba');
    }

    public function dbaBusinessAdmins() {
        return view('programmes.doctor-business-adm-dba');
    }

    public function bscCivilEngTopUp() {
        return view('programmes.bsc-civil-eng-top-up');
    }

    public function bachelorEducaBed() {
        return view('programmes.bachelor-education-bed');
    }

    public function masterEducaPhd() {
        return view('programmes.master-education-med');
    }

    public function doctorEducaPhd() {
        return view('programmes.doctor-education-ded');
    }

    public function masterPublicAdmins() {
        return view('programmes.master-public-adm-mba');
    }

    public function baEnglishTopUp() {
        return view('programmes.ba-english');
    }
}
