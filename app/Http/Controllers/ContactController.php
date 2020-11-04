<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller {

    public function index() {
        return view('contact');
    }

    public function store(Request $request) {
        $contact = new Contact();
        $contact->name = $request->input('name');
        $contact->subject = $request->input('subject');
        $contact->email = $request->input('email');
        $contact->message = $request->input('message');

        $contact->save();

        return redirect('/contact')->with('success', 'Thanks for contacting with us ' .$contact->name. '. We will get back to you soon!');
    }
}
