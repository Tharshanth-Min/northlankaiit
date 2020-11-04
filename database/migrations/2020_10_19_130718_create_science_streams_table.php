<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateScienceStreamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('science_streams', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('al_result_id');
            $table->string('biology')->nullable();
            $table->string('physics')->nullable();
            $table->string('chemistry')->nullable();
            $table->string('agricultural_science')->nullable();
            $table->string('english')->nullable();
            $table->timestamps();

            $table->foreign("al_result_id")
                ->references("id")
                ->on("al_results")
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
        Schema::dropIfExists('science_streams');
    }
}
