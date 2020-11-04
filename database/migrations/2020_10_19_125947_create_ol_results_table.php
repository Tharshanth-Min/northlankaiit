<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOlResultsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ol_results', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('student_id');
            $table->string('english')->nullable();
            $table->string('math')->nullable();
            $table->string('science')->nullable();
            $table->text('remark')->nullable();
            $table->string('year_of_examination')->nullable();
            $table->string('index_no')->nullable();
            $table->timestamps();

            $table->foreign("student_id")
                ->references("id")
                ->on("students")
                ->onDelete("cascade");

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ol_results');
    }
}
