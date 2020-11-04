<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTechnologyStreamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('technology_streams', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('al_result_id');
            $table->string('economics')->nullable();
            $table->string('accounting')->nullable();
            $table->string('business_studies')->nullable();
            $table->string('information_technology')->nullable();
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
        Schema::dropIfExists('technology_streams');
    }
}
