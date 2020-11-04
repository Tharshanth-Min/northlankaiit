<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('course_id');
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('certification_name')->nullable();
            $table->string('title')->nullable();
            $table->string('date_of_birth')->nullable();
            $table->string('gender')->nullable();
            $table->string('nic_or_passport_no')->nullable();
            $table->string('nationality')->nullable();
            $table->string('tell_phone_personal')->nullable();
            $table->string('tell_phone_office')->nullable();
            $table->string('tell_phone_home')->nullable();
            $table->string('address')->nullable();
            $table->string('email')->nullable();
            $table->text('work_exp')->nullable();
            $table->text('other_quali')->nullable();
            $table->timestamps();

            $table->foreign("course_id")
                ->references("id")
                ->on("courses");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('students');
    }
}
