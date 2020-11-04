<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAlResultsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('al_results', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('student_id');
            $table->unsignedBigInteger('stream_type_id');
            $table->string('year_of_examination')->nullable();
            $table->string('index_no')->nullable();
            $table->timestamps();

            $table->foreign("student_id")
                ->references("id")
                ->on("students")
                ->onDelete("cascade");

            $table->foreign("stream_type_id")
                ->references("id")
                ->on("stream_types");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('al_results');
    }
}
